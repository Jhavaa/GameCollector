/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SUBMIT_LOGIN_REQ,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  FLIP_SUBMITFLAG,
} from './constants';

export const initialState = {
  username: '',
  password: '',
  submitFlag: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case FLIP_SUBMITFLAG:
        draft.submitFlag = !draft.submitFlag;
        break;
      case SUBMIT_LOGIN_REQ:
        break;
    }
  });

export default loginPageReducer;
