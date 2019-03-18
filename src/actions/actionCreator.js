import {INPUT_FROM_NAME, INPUT_FROM_EMAIL, INPUT_TO_NAME, INPUT_TO_EMAIL, INPUT_THEME, INPUT_MSG, ATTACH_FILE, DELETE_ATTACH_FILE} from '../constants';

export const inputFromName = (value, ) => ({
  type: INPUT_FROM_NAME,
  value,
});

export const inputFromEmail = (value, ) => ({
  type: INPUT_FROM_EMAIL,
  value,
});

export const inputToName = (value, ) => ({
  type: INPUT_TO_NAME,
  value,
});

export const inputToEmail = (value, ) => ({
  type: INPUT_TO_EMAIL,
  value,
});

export const inputTheme = (value, ) => ({
  type: INPUT_THEME,
  value,
});

export const inputMsg = (value, ) => ({
  type: INPUT_MSG,
  value,
});

export const attachFile = (file, ) => ({
  type: ATTACH_FILE,
  file,
});

export const deleteAttachFile = (id, ) => ({
  type: DELETE_ATTACH_FILE,
  id,
});

