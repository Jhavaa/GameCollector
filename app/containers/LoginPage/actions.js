/*
 *
 * RegisterPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_LOGIN_REQ,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  FLIP_SUBMITFLAG,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} password The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_PASSWORD
 */
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function flipSubmitFlag(submitFlag) {
  return {
    type: FLIP_SUBMITFLAG,
    submitFlag,
  };
}

export function submitLoginReq() {
  return {
    type: SUBMIT_LOGIN_REQ,
  };
}

/**
 * Dispatched when a successful registration request is made by the request saga
 *
 * @param  {array} response The response returned by the backend
 *
 * @return {object}      An action object with a type of REGISTER_SUCCESS
 */
export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}

/**
 * Dispatched when an error occurs during the registration request made by the request saga
 *
 * @param  {array} response The response returned by the backend
 *
 * @return {object}      An action object with a type of REGISTER_ERROR
 */
export function loginError(response) {
  return {
    type: LOGIN_ERROR,
    response,
  };
}
