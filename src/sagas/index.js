import { all } from 'redux-saga/effects';

import wsSagas from './wsSagas';

export function* rootSaga() {
  yield all ([
    wsSagas(),
  ])
}
