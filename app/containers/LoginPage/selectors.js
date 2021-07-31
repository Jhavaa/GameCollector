import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectRegisterPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

// const makeSelectLoginPage = () =>
//   createSelector(
//     selectLoginPageDomain,
//     regState => LoginState,
//   );

const makeSelectUsername = () =>
  createSelector(
    selectRegisterPageDomain,
    loginState => loginState.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectRegisterPageDomain,
    loginState => loginState.password,
  );

const makeSelectSubmitFlag = () =>
  createSelector(
    selectRegisterPageDomain,
    loginState => loginState.submitFlag,
  );

// export default makeSelectRegisterPage;
export { makeSelectUsername, makeSelectPassword, makeSelectSubmitFlag };
