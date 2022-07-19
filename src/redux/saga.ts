import { put } from 'redux-saga/effects';
import { increment } from './test';

function* testSaga() {
  yield put(increment());
}

export default testSaga;
