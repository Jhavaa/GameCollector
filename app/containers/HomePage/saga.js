/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `https://jhavacorsproxy.herokuapp.com/https://api.igdb.com/v4/games`;
  const options = {
    method: 'post',
    headers:
      ({'Client-ID': '6llto5s67z1ag9f3p4gmbfchrph4jo',
        'Authorization': 'Bearer l00lzsmqfzgr8o3g45qcr51sdnuudk'
      }),
    body: `fields name; where name ~ *"${username}"*;`,
  };
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, options);
    console.log(repos)
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
