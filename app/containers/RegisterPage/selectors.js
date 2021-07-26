import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerPage state domain
 */

const selectRegisterPageDomain = state => state.registerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterPage
 */

// const makeSelectRegisterPage = () =>
//   createSelector(
//     selectRegisterPageDomain,
//     regState => regState,
//   );

const makeSelectEmail = () =>
  createSelector(
    selectRegisterPageDomain,
    regState => regState.email,
  );

const makeSelectUsername = () =>
  createSelector(
    selectRegisterPageDomain,
    regState => regState.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectRegisterPageDomain,
    regState => regState.password,
  );

const makeSelectRetypePassword = () =>
  createSelector(
    selectRegisterPageDomain,
    regState => regState.retypePassword,
  );

const makeSelectSubmitFlag = () =>
  createSelector(
    selectRegisterPageDomain,
    regState => regState.submitFlag,
  );

// export default makeSelectRegisterPage;
export {
  selectRegisterPageDomain,
  makeSelectEmail,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectRetypePassword,
  makeSelectSubmitFlag,
};
