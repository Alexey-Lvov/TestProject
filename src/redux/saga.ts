import { all } from 'redux-saga/effects';
import {
  getProductsSaga,
  getTopProductsSaga,
  getProductSaga,
} from './products/saga';

export default function* rootSaga() {
  yield all([
    getProductsSaga(),
    getTopProductsSaga(),
    getProductSaga(),
  ]);
}
