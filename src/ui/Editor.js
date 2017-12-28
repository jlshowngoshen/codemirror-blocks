import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import classNames from 'classnames';
import CodeMirrorBlocks from '../blocks';
import {EVENT_DRAG_START, EVENT_DRAG_END} from '../blocks';
import Toolbar from './Toolbar';
import TrashCan from './TrashCan';
import PropTypes from 'prop-types';

require('./Editor.less');

export default class Editor extends Component {
  static propTypes = {
    options: PropTypes.object,
    cmOptions: PropTypes.object,
    language: PropTypes.string.isRequired,
  }

  static defaultProps = {
    options: {},
    cmOptions: {},
  }

  state = {
    showTrashCan: false,
  }

  componentDidMount() {
    this.blocks = new CodeMirrorBlocks(
      this.getCodeMirror(),
      this.props.language,
      this.props.options
    );
    this.blocks.setBlockMode(true);
    this.blocks.on(EVENT_DRAG_START, this.showTrashCan);
    this.blocks.on(EVENT_DRAG_END, this.hideTrashCan);
    // hrm, the code mirror instance is only available after
    // this gets rendered the first time, but we need
    // the codemirror instance in order to render...
    // so render again!
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.blocks.off(EVENT_DRAG_START, this.showTrashCan);
    this.blocks.off(EVENT_DRAG_END, this.hideTrashCan);
  }

  getCodeMirror() {
    return this.refs.cm.getCodeMirror();
  }

  getCodeMirrorBlocks() {
    return this.blocks;
  }

  showTrashCan = (_) => {
    this.setState({showTrashCan:true});
  }

  hideTrashCan = (_) => {
    this.setState({showTrashCan:false});
  }

  toggleBlocks = (_) => {
    this.blocks.toggleBlockMode();
    this.forceUpdate();
  }

  dropNodeOnTrash = (nodeId) => {
    this.blocks.deleteNodeWithId(nodeId);
    this.hideTrashCan();
  }

  render() {
    let blocks = this.blocks || {parser:{}};
    let glyphClass = classNames('glyphicon', {
      'glyphicon-pencil': blocks.blockMode,
      'glyphicon-align-left': !blocks.blockMode
    });
    let toolbarPaneClasses = classNames(
      "col-xs-3 toolbar-pane",
      {'show-trashcan':this.state.showTrashCan}
    );
    return (
      <div className="Editor">
        <div className="row">
          {this.blocks ?
            <div className={toolbarPaneClasses}>
              <Toolbar primitives={blocks.parser.primitives} renderer={this.blocks.renderer}/>
              <TrashCan onDrop={this.dropNodeOnTrash}/>
           </div> : null}
          <div className="col-xs-9 codemirror-pane">
            <CodeMirror ref="cm" options={this.props.cmOptions}/>
            <button className="blocks-toggle-btn btn btn-default btn-sm"
                    onClick={this.toggleBlocks}>
              <span className={glyphClass}></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
