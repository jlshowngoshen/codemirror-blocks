import {UnControlled as CodeMirror} from 'react-codemirror2';
import React  from 'react';
import {DropNodeTarget} from '../dnd';
import {drop, OverwriteTarget} from '../actions';
import {connect} from 'react-redux';
import SHARED from '../shared';
import {playSound, BEEP} from '../sound';

export default

@connect(null, dispatch => ({dispatch}))

@DropNodeTarget(function(monitor) {
  const roots = SHARED.cm.getAllMarks().filter(m => m.BLOCK_NODE_ID);
  const {x:left, y:top} = monitor.getClientOffset();
  console.log('DS26GTE DnDEd left=', left, 'top=', top);

  //const droppedOn = left && top && document.elementFromPoint(left, top);
  //const isDroppedOnWhitespace = !roots.some(r => r.replacedWith.contains(droppedOn));

  // DS26GTE: sidestep errors if left or top are falsy

  let droppedOn = false;

  if (left && top) {
    droppedOn = document.elementFromPoint(left, top);
  }

  let isDroppedOnWhitespace = false;

  if (droppedOn) {
    isDroppedOnWhitespace = !roots.some(r => r.replacedWith.contains(droppedOn));
  }

  if (isDroppedOnWhitespace) {
    const loc = SHARED.cm.coordsChar({left, top});
    drop(monitor.getItem(), new OverwriteTarget(loc, loc));
  } else { // beep and make it a no-op
    playSound(BEEP);
  }
})

class WrappedCodeMirror extends React.Component {

  handleDragOver = (ed, e) => {
    if (!e.target.classList.contains('CodeMirror-line')) {
      e.preventDefault();
    }
  }

  handleDrop = _ => {
    // :( this never fire because of the other onDrop, although this onDrop
    // has the access to the information whether we drop at the right place :(
  }

  render() {
    return this.props.connectDropTarget(
      <div>
        <CodeMirror
          onDrop={this.handleDrop}
          onDragOver={this.handleDragOver}
          {...this.props} />
          //invisible form for error logging
          // NOTE(Emmanuel) we should re-evaluate this when dealing with pages that have multiple block editors
          <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}}></iframe>
          <form method="post"
                action="https://docs.google.com/forms/d/e/1FAIpQLScK5CxR-vUC76XBAXsYZYqNqB15YiSpRc61d30DXFUkBVaO0g/formResponse"
                name="theForm" 
                id="errorLogForm" 
                target="hidden_iframe" 
                style={{display:'none'}}>
                <textarea name="entry.525957299"  id="start_code" defaultValue="default_code"/>
                <textarea name="entry.1523208531" id="end_code"   defaultValue="default_code_at_error"/>
                <textarea name="entry.1568521986" id="history"    defaultValue="default_history"/>
                <textarea name="entry.785063835"  id="exception"  defaultValue="default_exception"/>
                <input type="button" value="Submit" className="submit"/>
          </form>
      </div>
    );
  }
}
