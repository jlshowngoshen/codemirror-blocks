import React  from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ASTNode} from '../ast';
import {isControl, say, skipWhile} from '../utils';
import {dropNode, toggleSelection, deleteNodes, copyNodes, 
  pasteNodes, activate, activateByNId} from '../actions';
import NodeEditable from './NodeEditable';
import Component from './BlockComponent';
import {isErrorFree} from '../store';
import global from '../global';
import {DragNodeSource, DropNodeTarget} from '../dnd';
import classNames from 'classnames';
import {store} from '../store';
import {playSound, BEEP} from '../sound';


function skipCollapsed(next) {
  return (node, state) => {
    const {collapsedList, ast} = state;
    const collapsedNodeList = collapsedList.map(ast.getNodeById);

    // NOTE(Oak): if this is too slow, consider adding a
    // next/prevSibling attribute to short circuit navigation
    return skipWhile(
      node => !!node && collapsedNodeList.some(
        collapsed => ast.isAncestor(collapsed.id, node.id)
      ),
      next(node),
      next
    );
  };
}

function getLastVisibleNode() {
  return (node, state) => {
    const {collapsedList, ast} = state;
    const collapsedNodeList = collapsedList.map(ast.getNodeById);
    const lastNode = ast.getNodeBeforeCur(ast.reverseRootNodes[0].to);
    return skipWhile(
      node => !!node && node.parent && collapsedNodeList.some(
        collapsed => collapsed.id === node.parent.id),
      lastNode,
      n => n.parent
    );
  }
}

// TODO(Oak): make sure that all use of node.<something> is valid
// since it might be cached and outdated
// EVEN BETTER: is it possible to just pass an id?

@DragNodeSource
@DropNodeTarget(({node}) => {
  node = store.getState().ast.getNodeById(node.id);
  return {from: node.from, to: node.to};
})
class Node extends Component {
  static defaultProps = {
    children: null,
    normallyEditable: false,
    expandable: true,
  }

  static propTypes = {
    node: PropTypes.instanceOf(ASTNode),
    children: PropTypes.node,
    helpers: PropTypes.shape({
      renderNodeForReact: PropTypes.func.isRequired,
    }).isRequired,
    lockedTypes: PropTypes.array.isRequired,

    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,

    normallyEditable: PropTypes.bool,

    isSelected: PropTypes.bool.isRequired,
    expandable: PropTypes.bool,

    toggleSelection: PropTypes.func.isRequired,

    activate: PropTypes.func.isRequired,
    activateByNId: PropTypes.func.isRequired,
  }

  state = {editable: false, value: null}

  handleChange = (value) => {
    this.setState({value});
  }

  handleClick = e => {
    e.stopPropagation(); // prevent ancestors to steal focus
    e.preventDefault(); // TODO(Oak): really need it?
    if (!isErrorFree()) return; // TODO(Oak): is this the best way?

    this.props.activate(
      this.props.node.id,
      false,
      node => node
    );
  }

  handleKeyDown = e => {
    e.stopPropagation();
    if (!isErrorFree()) return; // TODO(Oak): is this the best way?

    const {
      node, expandable, isCollapsed,
      uncollapse, collapse, normallyEditable, toggleSelection,
      uncollapseAll, collapseAll, setCursor,
      handleCopy, handlePaste, handleDelete
    } = this.props;

    const activate = movement => this.props.activate(
      this.props.node.id,
      true,
      movement,
    );
    const activateByNId = movement => this.props.activateByNId(
      this.props.node.id,
      true,
      movement,
    );
    const findRoot = node => {
      let next = node;
      while (next && next.parent) {
        next = next.parent;
      }
      return next;
    };

    switch (e.key) {
    case 'ArrowUp':
      // TODO(Oak): hook the search engine here!
      e.preventDefault();
      activate(skipCollapsed(node => node.prev));
      return;

    case 'ArrowDown':
      // TODO(Oak): hook the search engine here!
      e.preventDefault();
      activate(skipCollapsed(node => node.next));
      return;
    // collapse all (shift), collapse current (if collapsable), select parent (if exists)
    case 'ArrowLeft':
      e.preventDefault();
      if (e.shiftKey) { // activate the root
        collapseAll();
        activate(findRoot);
      } else if (expandable && !isCollapsed && !this.isLocked()) {
        collapse(node.id);
      } else if (node.parent) {
        activate(node => node.parent);
      } else { 
        playSound(BEEP); 
      }
      return;
    // expand all (shift), expand current (if expandable), select first child (if expanded)
    case 'ArrowRight':
      e.preventDefault();
      if (e.shiftKey) {
        uncollapseAll();
      } else if (expandable && isCollapsed && !this.isLocked()) {
        uncollapse(node.id);
      } else if (node.next && node.next.parent === node) {
        activate(node => {
          const next = node.next;
          if (next && next.level === node.level + 1) {
            return next;
          }
          return null;
        });
      } else {
        playSound(BEEP);
      }
      return;
    // toggle selection
    case ' ':
      e.preventDefault();
      toggleSelection(node.id);
      return;
    // edit if normally editable, otherwise toggle collapsed state
    case 'Enter':
      e.preventDefault();
      if (normallyEditable || isControl(e)) {
        this.handleMakeEditable(e);
      } else if (expandable && !this.isLocked()) {
        (isCollapsed ? uncollapse : collapse)(node.id);
      } else {
        playSound(BEEP);
      }
      return;
    // clear selection
    case 'Escape':
      e.preventDefault();
      this.props.clearSelections();
      return;
    // delete seleted nodes
    case 'Delete':
    case 'Backspace':
      e.preventDefault();
      handleDelete();
      return;
    // insert-right
    case ']':
      e.preventDefault();
      if (e.ctrlKey) { // strictly want ctrlKey
        // TODO: this should go up to the top level block
        setCursor(node.to);
      }
      return;
    // insert-left
    case '[':
      e.preventDefault();
      if (e.ctrlKey) { // strictly want ctrlKey
        // TODO: this should go up to the top level block
        setCursor(node.from);
      }
      return;
    // copy
    case 'c':
      e.preventDefault();
      if (isControl(e)) {
        handleCopy(node.id, nodeSelections => {
          if (nodeSelections.length == 0) {
            // NOTE(Oak): no nodes are selected, do it on id instead
            return [node.id, ...nodeSelections];
          } else {
            return nodeSelections;
          }
        });
      }
      return;
    // paste
    case 'v':
      if (isControl(e)) {
        handlePaste(node.id, e.shiftKey);
      }
      return;
    // cut
    case 'x':
      e.preventDefault();
      if (isControl(e)) {
        handleCopy(node.id, nodeSelections => {
          if (nodeSelections.length == 0) {
            say('Nothing selected');
          }
          return nodeSelections;
        });
        handleDelete();
      }
      return;
    // go to the very first node in the AST
    case 'Home':
      e.preventDefault();
      this.props.activateByNId(0, true, node => node);
      return;
    // go to last _visible_ node in the AST
    case 'End':
      activate(getLastVisibleNode());
      return;
    // "jump to the root of the active node"
    case '<':
      e.preventDefault();
      activate(findRoot);
      return;
    // "read all the ancestors"
    case '\\': {
      e.preventDefault();
      const parents = [node];
      let next = node.parent;
      while (next) {
        parents.push(next.options['aria-label'] + ", at level " + next.level);
        next = next.parent;
      }
      if(parents.length > 1) say(parents.join(", inside "));
      else playSound(BEEP);
      return;
    }
    // "read the first set of children"
    case '|':
      e.preventDefault();
      say(node.toDescription(node.level));
      return;
    }
  }

  handleDoubleClick = e => {
    e.stopPropagation();
    if (this.props.normallyEditable) {
      this.handleMakeEditable();
    }
  }

  handleMakeEditable = () => {
    if (!isErrorFree()) return;
    this.setState({editable: true});
    global.cm.refresh(); // is this needed?
  };

  handleDisableEditable = () => this.setState({editable: false});


  isLocked() {
    return this.props.lockedTypes.includes(this.props.node.type);
  }

  render() {
    const {
      isSelected,
      isCollapsed,
      expandable,
      children,
      node,
      ...passingProps
    } = this.props;

    if (node.options.comment) {
      // TODO: can we avoid mutating in render()?
      node.options.comment.id = "block-node-" + node.id + "-comment";
    }
    const commentID = node.options.comment ? node.options.comment.id : '';

    const locked = this.isLocked();

    const props = {
      id                : `block-node-${node.id}`,
      tabIndex          : "-1",
      'aria-selected'   : isSelected,
      'aria-label'      : node.options['aria-label']+',' ,
      'aria-labelledby' : `block-node-${node.id} ${commentID}`,
      'aria-disabled'   : locked ? "true" : undefined,
      'aria-expanded'   : (expandable && !locked) ? !isCollapsed : undefined,
      'aria-setsize'    : node["aria-setsize"],
      'aria-posinset'   : node["aria-posinset"],
      'aria-level'      : node.level,
      'aria-multiselectable' : "true"
    };

    const classes = [
      {'blocks-locked': locked},
      `blocks-${node.type}`
    ];

    if (this.state.editable) {
      // TODO: combine passingProps and contentEditableProps
      return (
        <NodeEditable {...passingProps}
                      onDisableEditable={this.handleDisableEditable}
                      extraClasses={classes}
                      isInsertion={false}
                      node={node}
                      value={this.state.value}
                      onChange={this.handleChange}
                      contentEditableProps={props} />
      );
    } else {
      const {connectDragSource, isDragging, connectDropTarget, isOver} = this.props;
      classes.push({'blocks-over-target': isOver, 'blocks-node': true});
        let result = (
          <span
            {...props}
            className     = {classNames(classes)}
            ref           = {el => node.element = el}
            role          = "treeitem"
            style={{
              opacity: isDragging ? 0.5 : 1,
            }}
            onClick       = {this.handleClick}
            onDoubleClick = {this.handleDoubleClick}
            onKeyDown     = {this.handleKeyDown}>
            {children}
            {
              node.options.comment &&
                this.props.helpers.renderNodeForReact(node.options.comment)
            }
          </span>
        );
        if (this.props.normallyEditable) {
          result = connectDropTarget(result);
        }
        return connectDragSource(result);
    }
  }
}

const mapStateToProps = (
  {selections, collapsedList},
  {node}
  // be careful here. Only node's id is accurate. Use getNodeById
  // to access accurate info
) => {
  return {
    isSelected: selections.includes(node.id),
    isCollapsed: collapsedList.includes(node.id),
  };
};

const mapDispatchToProps = dispatch => ({
  toggleSelection: id => dispatch(toggleSelection(id)),
  clearSelections: () => dispatch({type: 'SET_SELECTIONS', selections: []}),
  collapse: id => dispatch({type: 'COLLAPSE', id}),
  uncollapse: id => dispatch({type: 'UNCOLLAPSE', id}),
  collapseAll: () => dispatch({type: 'COLLAPSE_ALL'}),
  uncollapseAll: () => dispatch({type: 'UNCOLLAPSE_ALL'}),
  handleDelete: () => dispatch(deleteNodes()),
  onDrop: (src, dest) => dispatch(dropNode(src, dest)),
  setCursor: cur => dispatch({type: 'SET_CURSOR', cur}),
  handleCopy: (id, selectionEditor) => dispatch(copyNodes(id, selectionEditor)),
  handlePaste: (id, isBackward) => dispatch(pasteNodes(id, isBackward)),
  activate: (id, allowMove, movement) => dispatch(activate(id, allowMove, movement)),
  activateByNId: (nid, allowMove, movement) => dispatch(activateByNId(nid, allowMove, movement)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Node);
