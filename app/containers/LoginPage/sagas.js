/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOGIN } from '../App/constants';
import { loginCompleted, loginFailed } from '../App/actions';

import request from 'utils/request';
import { makeSelectEmail, makeSelectPassword } from './selectors';

/**
 * Github repos request/response handler
 */
export function* login() {
  // Select username from store
  const email = yield select(makeSelectEmail);
  const password = yield select(makeSelectPassword);
  const requestURL = 'http://localhost:4040/api/auth/login';

  try {
    // Call our request helper (see 'utils/request')
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        password,
      })
    };
    const data = yield call(request, requestURL, options);
    console.log("data: ", data);
    sessionStorage.setItem('jwtToken', data.token);
    yield put(loginCompleted(data));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOGIN, login);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  loginData,
];
