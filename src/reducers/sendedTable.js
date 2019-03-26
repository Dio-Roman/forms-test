import {ADD_TO_SENDED_TABLE} from '../constants';

let initialState = [];

let day = new Date ();
let date = `${day.getDate()} ${day.toLocaleString('ru', {month: 'long'})}`

const sendedTable = (state = initialState, {type, theme, res}) => {
  switch (type) {
    case ADD_TO_SENDED_TABLE :
      let arr = [{id: (~~(Math.random()*1e8)).toString(16), theme: theme, time: date, status: res.status}]
      return state.concat(arr);
  
  
  
      default : 
      return state;
    }  
}

export default sendedTable;