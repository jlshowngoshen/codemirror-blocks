import {withDefaults, say, poscmp, srcRangeIncludes, minposOfArray, warn} from './utils';
import SHARED from './shared';
import {store} from './store';
import {playSound, WRAP} from './sound';
import {ASTNode} from './ast';
import {performEdits, edit_insert, edit_delete, edit_replace,
        edit_overwrite, padCopiedText} from './edits/performEdits';


// All editing actions are defined here.
//
// Many actions take a Target as an option. A Target may be constructed by any
// of the methods on the `Targets` export below.
//
// Just about every action can take an optional `onSuccess` and `onError`
// callback. If the action is successful, it will call `onSuccess(newAST)`. If
// it fails, it will call `onError(theError)`.
//
// The implementation of actions is in the folder `src/actions/`. IT IS PRIVATE,
// AND NO FILE EXCEPT src/actions.js SHOULD EVER NEED TO IMPORT IT. The
// implementation is complex, because while edits are best thought of as
// operations on the AST, they must all be transformed into text edits, and the
// only interface we have into the language's textual syntax are the `pretty`
// and `parse` methods.


// A _Target_ says where an action is directed. For example, a target may be a
// node or a drop target.
//
// These kinds of actions _have_ a target:
//
// - Paste: the target says where to paste.
// - Drag&Drop: the target says what's being dropped on.
// - Insert/Edit: the target says where the text is being inserted/edited.
//
// The Target methods are defined at the bottom of this file.


// Insert `text` at the given `target`.
// See the comment at the top of the file for what kinds of `target` there are.
export function insert(text, target, onSuccess, onError) {
  checkTarget(target);
  const {ast} = store.getState();
  const edits = [target.toEdit(text)];
  performEdits('cmb:insert', ast, edits, onSuccess, onError);
}

// Delete the given nodes.
export function delete_(nodes, onSuccess, onError) { // 'delete' is a reserved word
  if (nodes.length === 0) return;
  const {ast} = store.getState();
  const edits = nodes.map(node => edit_delete(node));
  performEdits('cmb:delete-node', ast, edits, onSuccess, onError);
  store.dispatch({type: 'SET_SELECTIONS', selections: []});
}

// Copy the given nodes onto the clipboard.
export function copy(nodes) {
  if (nodes.length === 0) return;
  const {ast, focusId} = store.getState();
  // Pretty-print each copied node. Join them with spaces, or newlines for
  // commented nodes (to prevent a comment from attaching itself to a
  // different node after pasting).
  nodes.sort((a, b) => poscmp(a.from, b.from));
  let text = "";
  let postfix = "";
  for (let node of nodes) {
    let prefix = (node.options && node.options.comment) ? "\n" : postfix;
    text = text + prefix + node.toString();
    postfix = (node.options && node.options.comment) ? "\n" : " ";
  }
  copyToClipboard(text);
  // Copy steals focus. Force it back to the node's DOM element
  // without announcing via activate() or activate().
  if (focusId) {
    ast.getNodeById(focusId).element.focus();
  }
}

// Paste from the clipboard at the given `target`.
// See the comment at the top of the file for what kinds of `target` there are.
export function paste(target, onSuccess, onError) {
  checkTarget(target);
  pasteFromClipboard(text => {
    const {ast} = store.getState();
    const edits = [target.toEdit(text)];
    performEdits('cmb:paste', ast, edits, onSuccess, onError);
    store.dispatch({type: 'SET_SELECTIONS', selections: []});
  });
}

// Drag from `src` (which should be a d&d monitor thing) to `target`.
// See the comment at the top of the file for what kinds of `target` there are.
export function drop(src, target, onSuccess, onError) {
  checkTarget(target);
  const {id: srcId, content: srcContent} = src;
  const {ast} = store.getState();
  const srcNode = srcId ? ast.getNodeById(srcId) : null; // null if dragged from toolbar
  const content = srcNode ? srcNode.toString() : srcContent;
  
  // If we dropped the node _inside_ where we dragged it from, do nothing.
  if (srcNode && srcRangeIncludes(srcNode.srcRange(), target.srcRange())) {
    return;
  }
  let edits = [];
  // Delete the dragged node, unless it came from the toolbar.
  if (srcNode !== null) {
    edits.push(edit_delete(srcNode));
  }
  // Insert or replace at the drop location, depending on what we dropped it on.
  edits.push(target.toEdit(content));
  // Perform the edits.
  performEdits('cmb:drop-node', ast, edits, onSuccess, onError);
}

let queuedAnnouncement = null;

// Activate the node with the given `id`.
export function activate(id, options) {
  return (dispatch, getState) => {
    options = withDefaults(options, {allowMove: true, record: true});
    const state = getState();
    const {ast, focusId, collapsedList} = state;
    if (id === null) { id = focusId }
    const node = ast.getNodeById(id);

    // Don't activate a toolbar node. (Screenreaders will still announce it)
    if (!node) { return; }

    // force the screenreader to re-announce if we're on the same node by blurring/refocusing
    // check for node.element, since the test suite may run so fast that the element isn't there
    if (node.id === focusId && node.element) {
      node.element.blur();
      setTimeout(() => node.element.focus(), 10);
    }
    // FIXME(Oak): if possible, let's not hard code like this
    if (['blank', 'literal'].includes(node.type) && !collapsedList.includes(node.id)) {
      if(queuedAnnouncement) { clearTimeout(queuedAnnouncement); } 
      queuedAnnouncement = setTimeout(() => say('Use enter to edit'), 1250 );
    }
    // FIXME(Oak): here's a problem. When we double click, the click event will
    // be fired as well. That is, it tries to activate a node and then edit
    // this is bad because both `say(...)` and `.focus()` will be unnecessarily
    // invoked.
    // The proper way to fix this is to do some kind of debouncing to avoid
    // calling `activate` in the first place
    // but we will use a hacky one for now: we will let `activate`
    // happens, but we will detect that node.element is absent, so we won't do
    // anything
    // Note, however, that it is also a good thing that `activate` is invoked
    // when double click because we can set focusId on the to-be-focused node

/* Note(Emmanuel): Oak says this used to be needed to avoid a bug
  // currently fixed a different way, by allowing CM to preserve state and letting
  // CMB's cur state remain unchanged (see SET_FOCUS in reducers.js)
SHARED.cm.setCursor({line: -1, ch: 0});
*/

    setTimeout(() => {
      dispatch({type: 'SET_FOCUS', focusId: node.id});
      
      if (options.record) {
        SHARED.search.setCursor(node.from);
      }
      if (node.element) {
        const scroller = SHARED.cm.getScrollerElement();
        const wrapper = SHARED.cm.getWrapperElement();

        if (options.allowMove) {
          SHARED.cm.scrollIntoView(node.from);
          let {top, bottom, left, right} = node.element.getBoundingClientRect(); // get the *actual* bounding rect
          let offset = wrapper.getBoundingClientRect();
          let scroll = SHARED.cm.getScrollInfo();
          top    = top    + scroll.top  - offset.top;
          bottom = bottom + scroll.top  - offset.top;
          left   = left   + scroll.left - offset.left;
          right  = right  + scroll.left - offset.left;
          SHARED.cm.scrollIntoView({top, bottom, left, right});
        }
        scroller.setAttribute('aria-activedescendent', node.element.id);
        node.element.focus();
      }
      
    }, 25);
  };
}

function checkTarget(target) {
  if (!(target instanceof Target)) {
    warn('actions', `Expected target ${target} to be an instance of the Target class.`);
  }
}

function copyToClipboard(text) {
  SHARED.buffer.value = text;
  SHARED.buffer.select();
  document.execCommand('copy');
}

function pasteFromClipboard(done) {
  SHARED.buffer.value = '';
  SHARED.buffer.focus();
  setTimeout(() => {
    done(SHARED.buffer.value);
  }, 50);
}


class Target {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  srcRange() {
    return {from: this.from, to: this.to};
  }
}

class InsertTarget extends Target {
  constructor(parentNode, fieldName, pos) {
    super(pos, pos);
    this.parent = parentNode;
    this.field = fieldName;
    this.pos = pos;
  }

  getText(_ast) {
    return "";
  }

  toEdit(text) {
    return edit_insert(text, this.parent, this.field, this.pos);
  }
}

class ReplaceNodeTarget extends Target {
  constructor(node) {
    const range = node.srcRange();
    super(range.from, range.to);
    this.node = node;
  }

  getText(ast) {
    const {from, to} = ast.getNodeById(this.node.id);
    return SHARED.cm.getRange(from, to);
  }

  toEdit(text) {
    return edit_replace(text, this.node);
  }
}

class OverwriteTarget extends Target {
  constructor(from, to) {
    super(from, to);
  }

  getText(_ast) {
    return SHARED.cm.getRange(this.from, this.to);
  }

  toEdit(text) {
    return edit_overwrite(text, this.from, this.to);
  }
}

export const Targets = {
  // Insert at an arbitrary location.
  insertAt: (parent, field, pos) => new InsertTarget(parent, field, pos),
  // Target an ASTNode. This will replace the node.
  replaceNode: (n) => new ReplaceNodeTarget(n),
  // Target a source range at the top level. This really has to be at the top
  // level: neither `from` nor `to` can be inside any root node.
  overwriteRegion: (from, to) => new OverwriteTarget(from, to),
  // The class of all targets.  
  Target: Target,
}
