import { put, takeEvery } from 'redux-saga/effects';
import apiCall from 'utils/apiCall';
import {
  getProductsSuccess,
  getProductsStart,
  getProductsFail,
  getTopProductsSuccess,
  getTopProductsStart,
  getTopProductsFail,
  getProductStart,
  getProductSuccess,
  getProductFail,
} from './reducer';

function* getProductsSuccessSaga(): any {
  try {
    const { data } = yield apiCall({
      type: 'GET',
      url: 'http://localhost:3000/products',
      body: '',
      headers: '',
      isToken: '',
      params: '',
      token: '',
      responseType: '',
    });
    yield put(getProductsSuccess(data));
  } catch (e) {
    yield put(getProductsFail());
  }
}

function* getProductsSaga() {
  yield takeEvery(getProductsStart.toString(), getProductsSuccessSaga);
}

function* getTopProductsSuccessSaga(): any {
  try {
    const { data } = yield apiCall({
      type: 'GET',
      url: 'http://localhost:3000/top-products',
      body: '',
      headers: '',
      isToken: '',
      params: '',
      token: '',
      responseType: '',
    });
    yield put(getTopProductsSuccess(data));
  } catch (e) {
    yield put(getTopProductsFail());
  }
}

function* getTopProductsSaga() {
  yield takeEvery(getTopProductsStart.toString(), getTopProductsSuccessSaga);
}

function* getProductSuccessSaga(action: any) {
  try {
    const { data } = yield apiCall({
      type: 'GET',
      url: `http://localhost:3000/products/${action.payload}`,
      body: '',
      headers: '',
      isToken: '',
      params: '',
      token: '',
      responseType: '',
    });
    yield put(getProductSuccess(data));
  } catch (e) {
    yield put(getProductFail());
  }
}

function* getProductSaga() {
  yield takeEvery(getProductStart.toString(), getProductSuccessSaga);
}

export { getProductsSaga, getTopProductsSaga, getProductSaga };
