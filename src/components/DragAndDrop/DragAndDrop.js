import React, {Component} from 'react';
import AttachBtn from '../AttachBtn/AttachBtn';
import {connect} from 'react-redux';
import {attachFile} from '../../actions/actionCreator';

import './style.css';

class DragAndDrop extends Component  {
  state = {
    dragging: false
  }

  dropRef = React.createRef();

  handleClickAttach = () => {
    this.setState({dragging: true})

  }

  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  // handleDragIn = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   this.dragCounter++ 
  //   if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
  //     this.setState({dragging: true})
  //   }
  // }

  // handleDragOut = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   this.dragCounter--
  // if (this.dragCounter > 0) return
  //   this.setState({dragging: false})
  // }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({dragging: false})
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.attachFile(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.dragCounter = 0
    }
  }

  componentDidMount() {
    this.dragCounter = 0
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handleDragIn)
    div.addEventListener('dragleave', this.handleDragOut)
    div.addEventListener('dragover', this.handleDrag)
    div.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    let div = this.dropRef.current
    div.removeEventListener('dragenter', this.handleDragIn)
    div.removeEventListener('dragleave', this.handleDragOut)
    div.removeEventListener('dragover', this.handleDrag)
    div.removeEventListener('drop', this.handleDrop)
  }

  render () {
    const {dragging} = this.state;
      return (
      <div className='dropArea_wrapper' ref={this.dropRef}>
        {dragging && 
        <div className='dropArea' >
          <h1 className='dropArea_h1'>Бросайте файлы сюда, я ловлю</h1>
          <p className='dropArea_p'>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</p>
        </div>}
        {this.props.children}
        <AttachBtn handleClickAttach={this.handleClickAttach}/>
     </div>
     )
   }
  }

// export default DragAndDrop;
export default connect (null, {attachFile})(DragAndDrop);