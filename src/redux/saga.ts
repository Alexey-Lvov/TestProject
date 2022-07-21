import { all } from 'redux-saga/effects';
import { getProductsSaga, getTopProductsSaga } from './products/saga';

export default function* rootSaga() {
  yield all([
    getProductsSaga(),
    getTopProductsSaga(),
  ]);
}
