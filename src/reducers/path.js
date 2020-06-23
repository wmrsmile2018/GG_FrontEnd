import { SET_PATH, PATH_CLEAN } from '../constants';

const initialState = {
  path: '',
};

const path = function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PATH:
      return {
        ...state,
        path: action.payload
      }
    case PATH_CLEAN + '_SUCCESS':
      return {
        ...state,
        path: ''
      }
    default:
      return state;
  }
}

export default path;
