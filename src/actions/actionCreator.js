import {
  INPUT_FROM_NAME,
  INPUT_FROM_EMAIL,
  INPUT_TO_NAME,
  INPUT_TO_EMAIL,
  INPUT_THEME,
  INPUT_MSG,
  ATTACH_FILE,
  DELETE_ATTACH_FILE,
  MSG_IN_QUEUE,
  ADD_TO_SENDED_TABLE,
  SET_TO_ZERO_INPUT
} from "../constants";

export const inputFromName = value => ({
  type: INPUT_FROM_NAME,
  value
});

export const inputFromEmail = value => ({
  type: INPUT_FROM_EMAIL,
  value
});

export const inputToName = value => ({
  type: INPUT_TO_NAME,
  value
});

export const inputToEmail = value => ({
  type: INPUT_TO_EMAIL,
  value
});

export const inputTheme = value => ({
  type: INPUT_THEME,
  value
});

export const inputMsg = value => ({
  type: INPUT_MSG,
  value
});

export const attachFile = (file, data) => ({
  type: ATTACH_FILE,
  file,
  data
});

export const deleteAttachFile = id => ({
  type: DELETE_ATTACH_FILE,
  id
});

export const msgInQueue = id => ({
  type: MSG_IN_QUEUE,
  id
});

export const addToSendedTable = (theme, res) => ({
  type: ADD_TO_SENDED_TABLE,
  theme,
  res
});

export const setToZeroInput = () => ({
  type: SET_TO_ZERO_INPUT
});
