import { NEW_WS, NEW_MESSAGE } from '../../constants';

const inititalState = {
  webSocket: {},
  messages: [],
  msg: [],
}

const ws = function reducer(state = inititalState, action) {


  switch (action.type) {
    case NEW_WS:
      return {
        ...state,
        webSocket: action.payload
      }
    case NEW_MESSAGE:
    console.log(action.payload.msg);
      return {
        ...state,
        messages: [...state.messages, action.payload.msg],
        msg: action.payload.msg,
      }
    default:
      return {
        ...state
      }
  }
}

export default ws;
