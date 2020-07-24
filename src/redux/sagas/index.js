import { all } from 'redux-saga/effects';

import wsSagas from './wsSagas';
import watchSignUp from './signUp';

export function* rootSaga() {
  yield all ([
    wsSagas(),
    watchSignUp(),
  ])
}
