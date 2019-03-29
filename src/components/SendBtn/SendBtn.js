import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import {
  msgInQueue,
  addToSendedTable,
  setToZeroInput
} from "../../actions/actionCreator";

class SendBtn extends Component {
  send = () => {
    const { input, msgInQueue, addToSendedTable, setToZeroInput } = this.props;
    const url = ["", "?queue"];

    msgInQueue();
    setTimeout(() => {
      fetch(
        `https://36c25ba9-ea05-4de9-984d-3537560dc779.mock.pstmn.io${
          url[Math.round(Math.random())]
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            fromName: input.fromName,
            fromEmail: input.fromEmail,
            toName: input.toName,
            toEmail: input.toEmail,
            theme: input.theme,
            msg: input.msg,
            files: input.files
          }),
          headers: {
            "Content-type": "multipart/form-data"
          }
        }
      )
        .then(data => {
          return data.json();
        })
        .then(res => {
          addToSendedTable(input.theme, res);
        })
        .then(msgInQueue())
        .then(setToZeroInput())

        .catch(err => {
          console.error(err);
          return Promise.resolve([]);
        });
    }, 2000);
  };

  render() {
    let disable = true;
    const { input } = this.props;
    if (input.fromName && input.fromEmail && input.toName && input.toEmail) {
      disable = false;
    }
    return (
      <button className="sendBtn" onClick={this.send} disabled={disable}>
        Отправить
      </button>
    );
  }
}

export default connect(
  state => ({
    input: state.formFields
  }),
  { msgInQueue, addToSendedTable, setToZeroInput }
)(SendBtn);
