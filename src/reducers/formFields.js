import {INPUT_FROM_NAME, INPUT_FROM_EMAIL, INPUT_TO_NAME, INPUT_TO_EMAIL, INPUT_THEME, INPUT_MSG, ATTACH_FILE, DELETE_ATTACH_FILE} from '../constants';

let initialState = 
  {
    fromName: '',
    fromEmail: '',
    toName: '',
    toEmail: '',
    theme: '',
    msg: '',
    attaches: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
    ],
    files: {}
  };

const formFields = (state = initialState, {type, value, file, data, id}) => {
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

      case ATTACH_FILE :
      let newFileArr = [file.name];
        // console.log(file.name);
      return {...state, attaches: state.attaches.concat(newFileArr), files: {...state.files, [file.name] : data}}

      case DELETE_ATTACH_FILE :
        // console.log(newFileArr);
        delete state.files[id];
        return {...state, attaches: state.attaches.filter(el=>el!==id)};

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