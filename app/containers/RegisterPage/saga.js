// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { registerError, registerSuccess } from './actions';
import { SUBMIT_REG_REQ } from './constants';

import {
  makeSelectEmail,
  makeSelectUsername,
  makeSelectPassword,
  // makeSelectRetypePassword,
} from './selectors';

export function* getData() {
  const requestURL =
    'https://rtnuhr55g5.execute-api.us-east-1.amazonaws.com/prod/register';

  const username = yield select(makeSelectUsername());
  const email = yield select(makeSelectEmail());
  // name: name,
  const password = yield select(makeSelectPassword());

  const requestBody = {
    username,
    email,
    name: 'test',
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
    const register = yield call(request, requestURL, options);
    // console.log(register);
    yield put(registerSuccess(register));
  } catch (err) {
    // console.log(err);
    yield put(registerError(err));
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SUBMIT_REG_REQ, getData);
}
