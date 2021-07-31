/*
 * LoginPage
 *
 * User Login
 */
import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import messages from './messages';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeSelectSubmitFlag,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  changeUsername,
  changePassword,
  flipSubmitFlag,
  submitLoginReq,
} from './actions';

import Form from './Form';
import Input from './Input';
import SignUpLink from './SignUpLink';
// import LoginBox from './LoginBox';
import ErrorMessage from '../RegisterPage/ErrorMessage';
import RegisterButton from '../RegisterPage/RegisterButton';

const LoginBox = styled.div``;

export function LoginPage({
  username,
  password,
  submitFlag,
  onChangeUsername,
  onChangePassword,
  onFlipSubmitFlag,
  onSubmitForm,
}) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (submitFlag && (username.trim() === '' || password.trim() === '')) {
      setMessage('All fields are required');
    }
  }, [submitFlag, username, password]);

  const submitAndFlip = async event => {
    event.preventDefault();
    if (submitFlag === false) {
      await onFlipSubmitFlag();
    }
    if (username.trim() !== '' && password.trim() !== '') setMessage('');
    onSubmitForm();
  };

  return (
    <LoginBox>
      <Helmet>
        <title> Login Page </title>
        <meta name="description" content="Login Page" />
      </Helmet>

      <Form onSubmit={submitAndFlip}>
        <h1>
          <FormattedMessage {...messages.loginHeader} />
        </h1>

        <label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChangeUsername}
            s
          />
        </label>

        <label>
          <Input
            id="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </label>

        <RegisterButton type="submit" value="Login" />
      </Form>

      {/* <Button>
        <FormattedMessage {...messages.loginButton} />
      </Button> */}

      <div>
        <p>
          <FormattedMessage {...messages.loginDontHave} />
          <SignUpLink to="/register">
            <FormattedMessage {...messages.loginSignUp} />
          </SignUpLink>
        </p>
      </div>
      <ErrorMessage> {message} </ErrorMessage>
    </LoginBox>
  );
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  submitFlag: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onFlipSubmitFlag: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // loginPage: makeSelectLoginPage(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  submitFlag: makeSelectSubmitFlag(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onFlipSubmitFlag: () => dispatch(flipSubmitFlag()),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitLoginReq());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
