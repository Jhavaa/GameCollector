import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LoginPage'

export default defineMessages({
    loginHeader: {
        id: `${scope}.login.header`,
        defaultMessage: 'LOGIN',
    },
    loginButton: {
        id: `${scope}.login.button`,
        defaultMessage: 'Login',
    },
    loginDontHave: {
        id: `${scope}.login.dontHave`,
        defaultMessage: 'Don\'t have an account?',
    },
    loginSignUp: {
        id: `${scope}.login.signUp`,
        defaultMessage: ' Sign Up',
    },

});