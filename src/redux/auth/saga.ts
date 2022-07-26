import { takeEvery } from 'redux-saga/effects';
import apiCall from 'utils/apiCall';
import {
  createUserStart,
} from './reducer';

function* createUser({ payload }: any): any {
  const { type, number } = payload;
  try {
    const { data } = yield apiCall({
      type: 'POST',
      url: 'http://localhost:3000/users',
      body: {
        name: '11',
        number,
        balance: 0,
        type,
      },
      headers: '',
      isToken: '',
      params: '',
      token: '',
      responseType: '',
    });
    localStorage.setItem('user', JSON.stringify(data));
    window.location.href = '/';
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

function* createUserSaga() {
  yield takeEvery(createUserStart.toString(), createUser);
}

export default createUserSaga;
