import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';

class SendedMsg extends Component {
  render () {
    const {msg} = this.props;
    return (
      <div>
        {
          (msg.length) ?
          <>  
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
                {msg.map(el=>
                  <tr>
                    <td>{el.time} </td>
                    <td>{(el.theme.length > 50)? `${el.theme.slice(0, 50)} ...` : el.theme} </td>
                    <td>
                      {(el.status=='Отправлено') ? 
                       <span className='table_status-sended'>Отправлено</span> 
                      :
                       <span className='table_status-error'>Ошибка</span> 
                      }
                      {/* <span className='table_status-queue'>В очереди</span> */}
                    </td>
                </tr>
                )}
              </tbody>
            </table> 
          </>        
        :
        <p>Сообщения ещё не отправлялись</p>
        }
        
      </div>
    )
  }
}

export default connect (state => ({
  msg: state.sendedTable,
  }), {})(SendedMsg);
