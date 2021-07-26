/*
 *
 * RegisterPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_REG_REQ,
  CHANGE_EMAIL,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_RETYPEPASSWORD,
  FLIP_SUBMITFLAG,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} email The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_EMAIL
 */
export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
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

/**
 * Changes the input field of the form
 *
 * @param  {string} retypePassword The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_RETYPEPASSWORD
 */
export function changeRetypePassword(retypePassword) {
  return {
    type: CHANGE_RETYPEPASSWORD,
    retypePassword,
  };
}

export function flipSubmitFlag(submitFlag) {
  return {
    type: FLIP_SUBMITFLAG,
    submitFlag,
  };
}

export function submitRegReq() {
  return {
    type: SUBMIT_REG_REQ,
  };
}

/**
 * Dispatched when a successful registration request is made by the request saga
 *
 * @param  {array} username The username chosen by the user
 *
 * @return {object}      An action object with a type of REGISTER_SUCCESS
 */
export function registerSuccess(username) {
  return {
    type: REGISTER_SUCCESS,
    username,
  };
}

/**
 * Dispatched when an error occurs during the registration request made by the request saga
 *
 * @param  {array} username The username chosen by the user
 *
 * @return {object}      An action object with a type of REGISTER_ERROR
 */
export function registerError(username) {
  return {
    type: REGISTER_ERROR,
    username,
  };
}
