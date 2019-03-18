import React, {Component} from 'react';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import './style.css';
import {connect} from 'react-redux';

class FileList extends Component {
  render () {
    const {attachFiles} = this.props;
    return (
      <DragAndDrop>
        <div className='fileList' >    
          {attachFiles.attaches.map((file, i) =>
            <div 
              id={file}
              className='fileList_item'        
              key={i}>
              <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.79999 29.486C5.21599 29.486 3.72699 28.87 2.607 27.749C1.487 26.629 0.869995 25.14 0.869995 23.556C0.869995 21.973 1.487 20.483 2.607 19.363L19.577 2.393C22.669 -0.698 27.701 -0.699 30.792 2.393C32.29 3.89 33.115 5.882 33.115 8C33.115 10.118 32.29 12.11 30.792 13.607L18.064 26.335L16.749 25.02L29.477 12.292C31.844 9.925 31.844 6.075 29.477 3.708C27.112 1.342 23.26 1.341 20.893 3.708L3.922 20.679C3.153 21.447 2.73 22.469 2.73 23.556C2.73 24.644 3.153 25.665 3.922 26.434C5.509 28.021 8.09099 28.02 9.67799 26.434L22.406 13.706C23.213 12.899 23.213 11.586 22.406 10.778C21.599 9.971 20.285 9.972 19.479 10.779L10.993 19.264L9.67799 17.949L18.163 9.463C19.695 7.932 22.189 7.931 23.721 9.463C25.253 10.996 25.253 13.489 23.721 15.021L10.993 27.749C9.873 28.87 8.384 29.486 6.79999 29.486Z" fill="black"/>
              </svg>
              {file}
              <DeleteBtn id={file}/>
            </div>
          )}
        </div>
      </DragAndDrop>
    )
  }
}

export default connect (state => ({
  attachFiles: state.formFields,
  }), {})(FileList);