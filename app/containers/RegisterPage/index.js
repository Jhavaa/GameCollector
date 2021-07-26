/**
 *
 * RegisterPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectEmail,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectRetypePassword,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  changeEmail,
  changeUsername,
  changePassword,
  changeRetypePassword,
  submitRegReq,
} from './actions';

import Form from './Form';
import Input from './Input';
import RegisterButton from './RegisterButton';

export function RegisterPage({
  email,
  username,
  password,
  retypePassword,
  onSubmitForm,
  onChangeEmail,
  onChangeUsername,
  onChangePassword,
  onChangeRetypePassword,
}) {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  useEffect(() => {
    if (
      username.trim() === '' ||
      email.trim() === '' ||
      // name.trim() === '' ||
      password.trim() === ''
    ) {
      // console.log('All fields are required');
    } else onSubmitForm();
  }, []);

  return (
    <div>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Register Page" />
      </Helmet>

      <Form onSubmit={onSubmitForm}>
        <h1>
          <FormattedMessage {...messages.signUpHeader} />
        </h1>
        <label htmlFor="email">
          <Input
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
          />
        </label>
        <label htmlFor="username">
          <Input
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={onChangeUsername}
          />
        </label>
        <label htmlFor="password">
          <Input
            id="password"
            type="text"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <label htmlFor="retypePassword">
          <Input
            id="retypePassword"
            type="text"
            placeholder="retypePassword"
            value={retypePassword}
            onChange={onChangeRetypePassword}
          />
        </label>

        <RegisterButton type="submit" value="Register" />
      </Form>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RegisterPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  retypePassword: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeRetypePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // registerPage: makeSelectRegisterPage(),
  email: makeSelectEmail(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  retypePassword: makeSelectRetypePassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onChangeRetypePassword: evt =>
      dispatch(changeRetypePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitRegReq());
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
)(RegisterPage);
