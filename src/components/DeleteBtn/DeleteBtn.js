import React, {Component} from 'react';
import './style.css';
import {deleteAttachFile} from '../../actions/actionCreator';
import {connect} from 'react-redux';

 class DeleteBtn extends Component  {

  handleDelete = (e) => {
  this.props.deleteAttachFile(e.target.id);
 }

  render () {
  return (
      <button className='sender_delBtn' id={this.props.id} onClick={this.handleDelete}>
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H5V13H4V5Z" fill="#FF6666"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H7V13H6V5Z" fill="#FF6666"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5H9V13H8V5Z" fill="#FF6666"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2H13V3H0V2Z" fill="#FF6666"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96497 2.5H8.03497V1.5C8.03497 1.205 7.79497 0.965004 7.49997 0.965004H5.49997C5.20497 0.965004 4.96497 1.205 4.96497 1.5V2.5H4.03497V1.5C4.03497 0.692004 4.69247 0.0350037 5.49997 0.0350037H7.49997C8.30747 0.0350037 8.96497 0.692004 8.96497 1.5V2.5" fill="#FF6666"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.50003 16H3.50003C2.69303 16 1.98653 15.3455 1.92503 14.541L1.00153 2.5385L1.99853 2.4615L2.92203 14.4645C2.94403 14.75 3.21403 15 3.50003 15H9.50003C9.78603 15 10.056 14.75 10.078 14.465L11.0015 2.4615L11.9985 2.5385L11.075 14.541C11.0135 15.3455 10.307 16 9.50003 16" fill="#FF6666"/>
        </svg>
        Удалить
      </button>
    )
}
  }

export default connect (null, {deleteAttachFile})(DeleteBtn);
