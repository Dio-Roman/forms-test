import {INPUT_FROM_NAME, INPUT_FROM_EMAIL, INPUT_TO_NAME, INPUT_TO_EMAIL, INPUT_THEME, INPUT_MSG} from '../constants';

let initialState = 
  {
    fromName: '',
    fromEmail: '',
    toName: '',
    toEmail: '',
    theme: '',
    msg: '',
    // validate: true,
    // placeholder: '',
  }

;

const formFields = (state = initialState, {type, value}) => {
  switch (type) {
      case INPUT_FROM_NAME :
        return {...state, fromName: value};
        
      case INPUT_FROM_EMAIL :
        return {...state, fromEmail: value};
        
      case INPUT_TO_NAME :
        return {...state, toName: value};
    
      case INPUT_TO_EMAIL :
        return {...state, toEmail: value};

      case INPUT_THEME :
        return {...state, theme: value};

      case INPUT_MSG :
        return {...state, msg: value};

        // case FETCH_SUCCESS :
        // return [ 
        //   ...state, 
        //   ...data
        // ];  

      default : 
      return state;
  }
}
   
export default formFields;