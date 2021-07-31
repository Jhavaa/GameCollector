// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loginError, loginSuccess } from './actions';
import { SUBMIT_LOGIN_REQ } from './constants';

import {
  makeSelectUsername,
  makeSelectPassword,
  // makeSelectRetypePassword,
} from './selectors';

export function* getData() {
  const requestURL =
    'https://rtnuhr55g5.execute-api.us-east-1.amazonaws.com/prod/login';

  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());

  const requestBody = {
    username,
    password,
  };

  const options = {
    method: 'post',
    headers: {
      'x-api-key': 'Gxwtap2rtk73O1dMA00MN2LLfFvoY2Hw5LAFMAfP',
    },
    body: JSON.stringify(requestBody),
  };

  try {
    const login = yield call(request, requestURL, options);
    // console.log(login);
    yield put(loginSuccess(login));
  } catch (err) {
    // console.log(err);
    yield put(loginError(err));
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_LOGIN_REQ, getData);
}
