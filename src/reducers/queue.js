import { MSG_IN_QUEUE } from "../constants";

let initialState = true;

const queue = (state = initialState, { type, value }) => {
  switch (type) {
    case MSG_IN_QUEUE:
      return !state;

    default:
      return state;
  }
};

export default queue;
