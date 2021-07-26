/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.RegisterPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the RegisterPage container!',
  },
  signUpHeader: {
    id: `${scope}.signup.header`,
    defaultMessage: 'SIGN UP',
  },
  signUpButton: {
    id: `${scope}.signup.button`,
    defaultMessage: 'Sign Up!',
  },
  signUpHave: {
    id: `${scope}.signup.already`,
    defaultMessage: 'Already have an account?',
  },
  signUpLogin: {
    id: `${scope}.signup.logIn`,
    defaultMessage: ' Log In',
  },
});
