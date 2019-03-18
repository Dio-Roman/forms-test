import React, {Component} from 'react';
import './style.css';

export default class SendedMsg extends Component {
  render () {
    return (
      <div>
        <h2>Отправленные сообщения</h2>
        
        <table>
          <thead className='table_head'>
            <tr >
               <th>Дата</th>
               <th>Тема</th>
               <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>30 апреля</td>
              <td>Какая-то тема с очень длиннющим названием </td>
              <td>
                <span className='table_status-sended'>Отправлено</span>
                {/* <span className='table_status-queue'>В очереди</span> */}
                {/* <span className='table_status-error'>Ошибка</span> */}
              </td>
            </tr>
            <tr>
              <td>30 апреля</td>
              <td>Какая-то тема...</td>
              <td>
                {/* <span className='table_status-sended'>Отправлено</span> */}
                {/* <span className='table_status-queue'>В очереди</span> */}
                <span className='table_status-error'>Ошибка</span>

              </td>
            </tr>
          </tbody>
        </table>

        {/* <p>Сообщения ещё не отправлялись</p> */}
      </div>
    )
  }
}