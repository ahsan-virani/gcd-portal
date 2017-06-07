// /**
//  * Gets the repositories of the user from Github
//  */
//
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { VALIDATE_TOKEN } from './constants';
import { validateTokenSuccess, validateTokenFailed } from './actions';
//
import request from 'utils/request';
import { makeSelectToken } from './selectors';
//
// /**
//  * Github repos request/response handler
//  */
export function* validateToken(action) {
  console.log("validateToken SAGA");
  // Select username from store
  // const token = yield select(makeSelectToken);

  // const password = yield select(makeSelectPassword);
  const requestURL = 'http://localhost:4040/api/auth/validateToken';

  try {
    // Call our request helper (see 'utils/request')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + action.token
      }
    };
    const data = yield call(request, requestURL, options);
    yield put(validateTokenSuccess(data, action.token));
    // yield put
  } catch (err) {
    yield put(validateTokenFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* validateTokenData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(VALIDATE_TOKEN, validateToken);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  validateTokenData,
];
