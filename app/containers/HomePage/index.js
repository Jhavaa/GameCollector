/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

/*
  IF YOU HAVE QUESTIONS ABOUT WHAT SOME VARIABLES DO, VISIT THEIR FILE! Their
  location is shown in the import statements below.
*/

/*
  ONE MORE NOTE: I didn't change the wording of some of the variables, like repos
  and reposlist, cause I was a little lazy. Just a warning that these variables are
  not talking about actual repos or anything github related!
*/

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Showcase from 'components/Showcase';
import { requestURLs, options } from 'utils/requestInfo';
import { loadRepos } from '../App/actions';

import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';

import { changeGameTitle } from './actions';
import { makeSelectGameTitle } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  gameTitle,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeGameTitle,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state gameTitle is not null on render, submit the form to load repos
    if (gameTitle && gameTitle.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <Showcase
            title="Popular"
            fetchUrl={requestURLs.default}
            options={options.popular}
          />
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="gameTitle">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="gameTitle"
                type="text"
                placeholder="game title"
                value={gameTitle}
                onChange={onChangeGameTitle}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </div>
    </article>
  );
}

/*
  HomePage.propTypes is a form of TypeChecking that allows us to keep a consistent
  type for each prop we use are reference in the HomePage container. This pretty
  means we want titles to be strings always and forever, else error.
*/

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  gameTitle: PropTypes.string,
  onChangeGameTitle: PropTypes.func,
};

/*
  The bottom const is used to instantiate the Selectors for each prop we want to
  track the state of. Selectors are a whole 'nother topic, but the basic gist of it
  is that they are objects used to simplify the state of a prop. So when a new game
  title is entered in the input box, the state changes to match that and we can
  access the state by viewing its selector. (This is a small part of REDUX, so read
  up on that to learn its role in that)
  THIS DEALS IN REDUX STORE'S STATE.
*/

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  gameTitle: makeSelectGameTitle(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

/*
  Like the selectors above, this function beneath the comment is used to track the
  state of a prop. HOWEVER! instead of making the state, this function is in charge
  of tracking changes in the props state. So this bottom code tells us that when the
  gameTile prop changes, send the value of the change to the redux store (storage).
  THIS DEALS IN REDUX STORE'S DISPATCH.
*/

export function mapDispatchToProps(dispatch) {
  return {
    onChangeGameTitle: evt => dispatch(changeGameTitle(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

/*
  Don't know too much about this one, but from what I can tell its just a way to 
  merge the results of the functions into one "merged prop".
*/
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
