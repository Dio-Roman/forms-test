import React, {Component} from 'react';
import './style.css';


 class SendBtn extends Component   {

//   // sendMail = () => {
//   //     fetch ('https://api.sendsay.ru/clu180', {
//   //       method: 'POST',
//   //       body: JSON.stringify({
//   //         body: document.querySelector("#mail").value,
//   //         userId: 1
//   //       }),
//   //       headers: {
//   //         "Content-type": "application/json; charset=UTF-8"
//   //       }
//   //      }).then (data => {
//   //       return data.json()
//   //   })
//   //   .catch (err=>{
//   //       console.error(err);
//   //       return Promise.resolve([])
//   //   })

   render () {
     return (
      <button className='sendBtn'>
        Отправить
      </button>
    )
   }
  
  }


export default SendBtn