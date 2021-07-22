import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LoginPage'

export default defineMessages({
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