import React, {Component} from 'react';
import './style.css';
import SendBtn from '../SendBtn/SendBtn';
import FileList from '../FileList/FileList';
import {connect} from 'react-redux';
// import Sendsay from 'sendsay-api';

import {inputFromName, inputFromEmail, inputToName, inputToEmail, inputTheme, inputMsg} from '../../actions/actionCreator';

class Sender extends Component {

  state = {
    from: {validate: false, placeholder: ''},
    emailFrom: {validate: false, placeholder: ''},
    to: {validate: false, placeholder: ''},
    emailTo: {validate: false, placeholder: ''},
  }

  handleInput = ({target: {value, name}}) => {
    const {inputFromName, inputFromEmail, inputToName, inputToEmail, inputTheme, inputMsg} = this.props;

    switch (name) {
      case 'from' :
        return inputFromName(value);
      case 'emailFrom' :
        return inputFromEmail(value);
      case 'to' :
        return inputToName(value);
      case 'emailTo' :
        return inputToEmail(value);
      case 'theme' :
        return inputTheme(value);
      case 'msg' :
        return inputMsg(value);
      default : 
        return null;
    }
  }

  validateForm = ({target: {value, name, placeholder}}) => {
      if (!value) {
        this.setState ({
          [name]: {validate : true , placeholder : placeholder}
        }) 
    } 
    else {
      this.setState ({
        [name]: {validate : false , placeholder : placeholder}
      }) 
    }
  }

  render () {
    const {from, emailFrom, to, emailTo, } = this.state;
    const {inputFrom} = this.props;

    return (
    <div className='sender'>
      <h1 className='sender_h1'>Отправлялка сообщений</h1>
      <form  className='sender_form'/* action="https://api.sendsay.ru/clu180" method="POST" onSubmit={this.handleSubmit}  encType="multipart/form-data"*/ autoComplete="off">
        <label className='sender_label sender_from '>
          От кого <br/>
          <input autoFocus className='sender_input' type='text' name='from' placeholder='Имя' value={inputFrom.fromName} onChange={this.handleInput} onBlur={this.validateForm}/>
          <input className='sender_input' type='text' name='emailFrom' placeholder='Email' value={inputFrom.fromEmail} onChange={this.handleInput} onBlur={this.validateForm}/>
          { from.validate&& <p className='sender_alertLeft'>{from.placeholder} не может быть пустым</p> }
          { emailFrom.validate&& <p className='sender_alertRight'>{emailFrom.placeholder} не может быть пустым</p> }
        </label>
        <label className='sender_label sender_to'>
          Кому <br/>
          <input className='sender_input' type='text' name='to' placeholder='Имя' value={inputFrom.toName} onChange={this.handleInput} onBlur={this.validateForm}/>
          <input className='sender_input' type='text' name='emailTo' placeholder='Email' value={inputFrom.toEmail} onChange={this.handleInput} onBlur={this.validateForm}/>
          { to.validate&& <p className='sender_alertLeft'>{to.placeholder} не может быть пустым</p> }
          { emailTo.validate&& <p className='sender_alertRight'>{emailTo.placeholder} не может быть пустым</p> }
        </label>  
        <label className='sender_label '>
          Тема письма <br/>
          <input className='sender_input sender_theme' type='text' name='theme' value={inputFrom.theme} onChange={this.handleInput} />
        </label>
        <label className='sender_label '>
          Сообщение <br/>
          <textarea  className='sender_input sender_msg' name='msg' value={inputFrom.msg} onChange={this.handleInput}></textarea>
        </label>
        <FileList/>
      </form>
      <SendBtn />
    </div>
    )
  }
}

export default connect (state => ({
  inputFrom: state.formFields,
  }), {inputFromName, inputFromEmail, inputToName, inputToEmail, inputTheme, inputMsg})(Sender);