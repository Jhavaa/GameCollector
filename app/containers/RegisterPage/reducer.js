/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SUBMIT_REG_REQ,
  CHANGE_EMAIL,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_RETYPEPASSWORD,
} from './constants';

export const initialState = {
  email: '',
  username: '',
  password: '',
  retypePassword: '',
};

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;
      case CHANGE_USERNAME:
        draft.username = action.username;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case CHANGE_RETYPEPASSWORD:
        draft.retypePassword = action.retypePassword;
        break;
      case SUBMIT_REG_REQ:
        break;
    }
  });

export default registerPageReducer;
