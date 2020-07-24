import { put, takeEvery, all, call } from 'redux-saga/effects';

import { instance } from '../../modules/instance';
import { SIGN_UP } from '../../constants';
import {
  signUp,
  signUpStart,
  signUpSuccess,
  signUpFail
} from '../actions/actionSignUp';



function* signUpGenerator(action) {
  yield put(signUpStart());
  try {
    console.log(parseInt(action.data.birthday.toString()));
    console.log(parseInt(action.data.creationDate.toString()));
    console.log(action.data);
    console.log(action.data.birthday);
    console.log(action.data.creationDate);
    const response = yield call(
      () => instance.post('http://localhost:8000/signup', {
        Login: action.data.login, Password: action.data.password, Email: action.data.email,
        Birthday: action.data.birthday.toString(),
        CreationDate: action.data.creationDate.toString(),
        Sex: action.data.sex, TypeUser: action.data.typeUser
      })
    );
    yield put(signUpSuccess())
  } catch(error) {
    yield put(signUpFail())
  }
}

export default function* watchSignUp() {
  yield takeEvery(SIGN_UP, signUpGenerator);
}
