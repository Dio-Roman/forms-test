import React, {Component} from 'react';

export default class SendedMsg extends Component {
  render () {
    return (
   <div>
     <h2>Отправленные сообщения</h2>
     <table>
       <thead>
<tr>
         <th>Дата</th>
       <th>Тема</th>
       <th>Статус</th>
</tr>
       </thead>
              <tbody>
       <tr>
         <td>30 апр</td>
         <td>Какая-то тема...</td>
         <td>Отправлено</td>
       </tr>
       <tr>
         <td>30 апр</td>
         <td>Какая-то тема...</td>
         <td>Отправлено</td>
       </tr>
     </tbody>
     </table>
   </div>
    )
  }
}