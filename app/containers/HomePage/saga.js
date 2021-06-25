/**
 * Gets the game title from IGDB
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

// request is a util function that pretty much makes our request for us.
import request from 'utils/request';
import { makeSelectGameTitle } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select gameTitle from store
  const gameTitle = yield select(makeSelectGameTitle());
  // requestURL is the api url we will be using to grab game data. (specifically game titles/names)
  const requestURL = `https://jhavacorsproxy.herokuapp.com/https://api.igdb.com/v4/games`;
  // options are the requestURL options we will need to properly make the request.
  const options = {
    // a post method is one that will tell the server hosting the API to create objects
    // with the information we asked for.
    method: 'post',
    // These headers are required to gain access to the API. Think of it as Authentication.
    headers: {
      'Client-ID': '6llto5s67z1ag9f3p4gmbfchrph4jo',
      Authorization: 'Bearer l00lzsmqfzgr8o3g45qcr51sdnuudk',
    },
    // In the body we currently are asking to search the DB for a name matching our input.
    body: `fields name; where name ~ *"${gameTitle}"*; limit 20;`,
  };


  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, options);
    /*
      I used this console.log command to keep track of what kind of objects we are
      recieving. You can uncomment it if you wanna see how the objects look in the
      console.
    */
    // console.log(repo);
    yield put(reposLoaded(repos, gameTitle));
    // yield put(coverLoaded(cover, gameTitle));
  } catch (err) {
    yield put(repoLoadingError(err));
  }


  // const gameID = ;

  // const optionsCover = {
  //   // a post method is one that will tell the server hosting the API to create objects
  //   // with the information we asked for.
  //   method: 'post',
  //   // These headers are required to gain access to the API. Think of it as Authentication.
  //   headers: {
  //     'Client-ID': '6llto5s67z1ag9f3p4gmbfchrph4jo',
  //     Authorization: 'Bearer l00lzsmqfzgr8o3g45qcr51sdnuudk',
  //   },
  //   // In the body we currently are asking to search the DB for a name matching our input.
  //   body: `fields url; where game = ${gameID};`,
  // };

//   try {
//     // Call our request helper (see 'utils/request')
//     const cover = yield call(request, 'https://jhavacorsproxy.herokuapp.com/https://api.igdb.com/v4/covers', optionsCover);
//     /*
//       I used this console.log command to keep track of what kind of objects we are
//       recieving. You can uncomment it if you wanna see how the objects look in the
//       console.
//     */
//     console.log(cover);
//     yield put(coverLoaded(cover, gameTitle));
//   } catch (err) {
//     yield put(coverLoadedError(err));
//   }
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
