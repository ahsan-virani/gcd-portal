/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_FAILED,
  VALIDATE_TOKEN,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAILED,
  // LOAD_REPOS_SUCCESS,
  // LOAD_REPOS,
  // LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  currentlySending: false,
  loggedIn: false,
  token: null
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_REPOS:
    //   return state
    //     .set('loading', true)
    //     .set('error', false)
    //     .setIn(['userData', 'repositories'], false);
    // case LOAD_REPOS_SUCCESS:
    //   return state
    //     .setIn(['userData', 'repositories'], action.repos)
    //     .set('loading', false)
    //     .set('currentUser', action.username);
    // case LOAD_REPOS_ERROR:
    //   return state
    //     .set('error', action.error)
    //     .set('loading', false);
    case LOGIN:
      // alert("Log in with: " + action.email + ', ' + action.password);
      // var emptyFormState = fromJS({ email: '', password: '' });
      return state.set('currentlySending', true).set('errorMessage': '');
      break;
    case LOGIN_COMPLETED:
      // alert('logged in maka');
      console.log(action.data);
      return state.set('currentlySending', false).set('loggedIn', true).set('currentUser', action.data.username).set('token', action.data.token);
      break;
    case LOGIN_FAILED:
      alert('log in failed maka');
      console.log(action.data);
      return state.set('currentlySending', false).set('loggedIn', false).set('currentUser', null);
      break;
    case VALIDATE_TOKEN:
      console.log("validate token recucer:", action.token);
      // alert("validate token recucer:", action.token);
      return state;
      break;
    case VALIDATE_TOKEN_SUCCESS:
      console.log("VALIDATE_TOKEN_SUCCESS, Data:", action.data);
      console.log("VALIDATE_TOKEN_SUCCESS, token:", action.token);
      return state.set('token', action.token);
      break;
    case VALIDATE_TOKEN_FAILED:
      console.log("VALIDATE_TOKEN_FAILED", action.data);
      return state.set('token', null);
      break;
    default:
      return state;
  }
}

export default appReducer;
