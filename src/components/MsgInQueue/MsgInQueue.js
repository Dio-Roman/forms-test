import React, { Component, } from 'react';
import './style.css';

const MsgInQueue = () => {
  return (
    <div className='msgInQueue'>
      <h1 className='msgInQueue_h1'>Сообщение поставлено в очередь на отправку</h1>
      <p className='msgInQueue_p'>Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты получателя «abc@my.com» со скоростью электронов. </p>
    </div>
  )
}

export default MsgInQueue