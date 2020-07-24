import { SIGN_UP } from '../../constants';

const inititalState = {
  login: '',
  password: '',
  email: '',
  birthday: 0,
  creationDate: 0,
  sex: '',
  typeUser: '',
}

const signUp = function reducer(state = inititalState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}

export default signUp;
