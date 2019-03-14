import React, {Component} from 'react';
import './style.css';
import AttachBtn from '../AttachBtn/AttachBtn';
import SendBtn from '../SendBtn/SendBtn';
import {connect} from 'react-redux';
import Sendsay from 'sendsay-api';

import {inputFromName, inputFromEmail, inputToName, inputToEmail, inputTheme, inputMsg} from '../../actions/actionCreator';

class Sender extends Component {

  state = {
    from: {validate: true, placeholder: ''},
    emailFrom: {validate: true, placeholder: ''},
    to: {validate: true, placeholder: ''},
    emailTo: {validate: true, placeholder: ''},
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

  handleSubmit = (e) => {
    e.preventDefault ();
//     var sendsay = new Sendsay({ apiUrl: 'https://api.sendsay.ru/clu180' });

//   // sendsay.request({ action: 'issue.send.test', list: ['about.id']}).then(function(res) {
//   // console.log(res.list['about.id']);
//   // })

// sendsay.setSessionFromCookie();

// var req = sendsay.request({
//   action: 'issue.send.test',

//   list: {
//     "action" : "issue.send.test",
//     "letter" : {
//       "subject" : "Тема письма",
//       "from.name" : "Имя отправителя" ,
//       "from.email" : "Адрес отправителя (email)",
//       "to.name" : "Имя получателя",
//       "message": {"text" : "текстовая версия письма" },
//       "attaches": [ 
//                     {
//                       "name" : "имя файла",
//                       "content": "содержимое файла закодированное base64",
//                       "encoding" : "base64",
//                     }
//                   ]
//     },
//     "sendwhen": "test",
//     "mca": [
//       "Адрес получателя (email)",
//     ],
//     "session": "sendsay_session"
//   }
//   ,
// });

// req.then(function(res) {
//   var settings = res.list;

//   console.log(settings);
// });

// level up
fetch ('https://api.sendsay.ru/clu180', {
        method: 'POST',
        body: JSON.stringify({
          body: 1,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
       }).then (data => {
        return data.json()
    })
    .catch (err=>{
        console.error(err);
        return Promise.resolve([])
    })


// ver2

// var sendsay = new Sendsay();

// sendsay.request({ action: 'issue.send.test', login: 'demo',  passw: 'secret' }).then(function(res) {
//   sendsay.setSession(res.session);

//   sendsay.request(res.session).then(function(res) {
//     console.log(res.list['about.id']);
//   })
// }); 

// sendsay.setSessionFromCookie(); 

// var req = sendsay.request({
//   action: 'sys.settings.get',

//   list: [
//     'about.id',
//   ],
// });

// req.then(function(res) {
//   var settings = res.list;

//   console.log(settings);
// });

  }

  validateForm = ({target: {value, name, placeholder}}) => {
    if (!value) {
      this.setState ({
        [name]: {validate : false , placeholder : placeholder}
      }) 
  } 
  else {
    this.setState ({
      [name]: {validate : true , placeholder : placeholder}
    }) 
  }
}

  render () {
    const {from, emailFrom, to, emailTo, } = this.state;
    const {inputFrom} = this.props;

    return (
    <div className='sender'>
      <h1 className='sender_h1'>Отправлялка сообщений</h1>
      <form  className='sender_form' action="https://api.sendsay.ru/clu180"method="POST"onSubmit={this.handleSubmit}  encType="multipart/form-data" autoComplete="off">
        <label className='sender_label sender_from '>
          От кого <br/>
          <input className='sender_input' type='text' name='from' placeholder='Имя' value={inputFrom.fromName} onChange={this.handleInput} onBlur={this.validateForm}/>
          <input className='sender_input' type='text' name='emailFrom' placeholder='Email' value={inputFrom.fromEmail} onChange={this.handleInput} onBlur={this.validateForm}/>
          { !from.validate&& <p className='sender_alertLeft'>{from.placeholder} не может быть пустым</p> }

          { !emailFrom.validate&& <p className='sender_alertRight'>{emailFrom.placeholder} не может быть пустым</p> }
        </label>
        <label className='sender_label sender_to'>
          Кому <br/>
          <input className='sender_input' type='text' name='to' placeholder='Имя' value={inputFrom.toName} onChange={this.handleInput} onBlur={this.validateForm}/>
          { !to.validate&& <p className='sender_alertLeft'>{to.placeholder} не может быть пустым</p> }
          <input className='sender_input' type='text' name='emailTo' placeholder='Email' value={inputFrom.toEmail} onChange={this.handleInput} onBlur={this.validateForm}/>
          { !emailTo.validate&& <p className='sender_alertRight'>{emailTo.placeholder} не может быть пустым</p> }
        </label>  
        <label className='sender_label '>
          Тема письма <br/>
          <input className='sender_input sender_theme' type='text' name='theme' value={inputFrom.theme} onChange={this.handleInput} />
        </label>
        <label className='sender_label '>
          Сообщение <br/>
          <textarea  className='sender_input sender_msg' name='msg' value={inputFrom.msg} onChange={this.handleInput}></textarea>
        </label>
        {/* <input type='submit' /> */}
      </form>
      <AttachBtn/>
      <SendBtn/>
    </div>
    )
  }
}

export default connect (state => ({
  inputFrom: state.formFields,
  }), {inputFromName, inputFromEmail, inputToName, inputToEmail, inputTheme, inputMsg})(Sender);