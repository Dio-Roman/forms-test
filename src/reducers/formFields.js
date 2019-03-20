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
    files: []
  }

;

const formFields = (state = initialState, {type, value, file, id}) => {
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
      // let newFileArr = [file[0].name];
        // let newFileArr = [file[0]];
        console.log(file[0]);
        // return {...state, attaches: state.attaches.concat(newFileArr)};
        return {...state, files: [...state.files, file[0]]}; 

      case DELETE_ATTACH_FILE :
        // let newFileArr = [file[0].name];
        // console.log(newFileArr);
        return {...state, attaches: state.attaches.filter(el=>el!==id)};
        // return state;

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