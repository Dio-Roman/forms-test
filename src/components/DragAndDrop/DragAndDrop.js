import React, { Component } from "react";
import AttachBtn from "../AttachBtn/AttachBtn";
import { connect } from "react-redux";
import { attachFile } from "../../actions/actionCreator";

import "./style.css";

class DragAndDrop extends Component {
  state = {
    dragging: false,
    fileSize: 0, // 20971520 Byte total
    addedFiles: []
  };

  dropRef = React.createRef();

  makeStyle = () => {
    let style = {
      height: "608px"
    };
    let attach = this.props.attaches;
    console.log(attach.length);
    if (attach.length > 0) {
      if (attach.length % 2 == 0) {
        style.height = `${608 + (attach.length / 2) * 59}px`;
        return style;
      } else {
        style.height = `${608 + ((attach.length + 1) / 2) * 59}px`;
        return style;
      }
    } else {
      return style;
    }
  };

  skipDropAreaEsc = e => {
    if (e.keyCode == 27) {
      this.setState({ dragging: false });
    }
  };

  skipDropAreaClick = e => {
    document.addEventListener(
      "click",
      e => {
        if (
          e.target.className !==
          "dropArea" /*|| (e.target.className !== 'dropArea_h1') ||(e.target.className !== 'dropArea_p')*/
        ) {
          this.setState({ dragging: false });
        }
      },
      true
    );
  };

  handleClickAttach = e => {
    e.preventDefault();
    this.setState({ dragging: true });
  };

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (e.dataTransfer.files[0].size <= 5242880) {
        //validation total files size per letter
        if (this.state.fileSize + e.dataTransfer.files[0].size <= 20971520) {
          //validation file size
          this.setState({
            fileSize: this.state.fileSize + e.dataTransfer.files[0].size
          });

          let transferFile = e.dataTransfer.files[0];

          let add = new FileReader();
          add.readAsDataURL(transferFile);
          add.onload = () => {
            let data = add.result;
            const arrFromData = Array.of(data);
            // console.log('file', res);
            // console.log('arr from file', filesArray);
            this.setState(
              { addedFiles: this.state.addedFiles.concat(arrFromData) },
              () => {
                this.props.attachFile(transferFile, arrFromData);
              }
            );
          };
        } else {
          alert("Нельзя прикрепить больше 20 Мб к одному письму !!!");
        }
      } else {
        alert(" Размер файла превышает 5 Мб!!!");
      }
    }
  };

  componentDidMount() {
    // this.dragCounter = 0
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }
  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }

  render() {
    const { dragging } = this.state;
    let style = this.makeStyle();
    return (
      <div
        className="dropArea_wrapper"
        ref={this.dropRef}
        onKeyDown={this.skipDropAreaEsc}
        onClick={this.skipDropAreaClick}
      >
        {dragging && (
          <div className="dropArea" style={style}>
            <h1 className="dropArea_h1">Бросайте файлы сюда, я ловлю</h1>
            <p className="dropArea_p">
              Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls,
              pdf) и zip-архивы. Размеры файла до 5 МБ
            </p>
          </div>
        )}
        {this.props.children}
        <AttachBtn handleClickAttach={this.handleClickAttach} />
      </div>
    );
  }
}

// export default DragAndDrop;
export default connect(
  null,
  { attachFile }
)(DragAndDrop);
