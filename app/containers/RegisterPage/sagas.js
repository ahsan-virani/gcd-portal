/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { REGISTER } from './constants';
import { registerCompleted, registerFailed } from './actions';

import request from 'utils/request';
import { makeSelectEmail, makeSelectPassword } from './selectors';

/**
 * Github repos request/response handler
 */
export function* register() {
	// Select username from store
	const email = yield select(makeSelectEmail);
	const password = yield select(makeSelectPassword);
	const requestURL = 'http://10.1.18.151:4040/api/users';

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
		yield put(registerCompleted(data));
	} catch (err) {
		yield put(registerFailed(err));
	}
}

/**
 * Root saga manages watcher lifecycle
 */
export function* registerData() {
	// Watches for LOAD_REPOS actions and calls getRepos when one comes in.
	// By using `takeLatest` only the result of the latest API call is applied.
	// It returns task descriptor (just like fork) so we can continue execution
	const watcher = yield takeLatest(REGISTER, register);

	// Suspend execution until location changes
	yield take(LOCATION_CHANGE);
	yield cancel(watcher);
}

// Bootstrap sagas
export default [
	registerData,
];
