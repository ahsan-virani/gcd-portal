/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_FAILED,
  VALIDATE_TOKEN,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAILED
} from './constants';


export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password,
  };
}

export function loginCompleted(data) {
  return {
    type: LOGIN_COMPLETED,
    data,
  };
}

export function loginFailed(data) {
  return {
    type: LOGIN_FAILED,
    data,
  };
}

export function validateToken(token) {
  console.log("validate token action called");
  return {
    type: VALIDATE_TOKEN,
    token,
  };
}

export function validateTokenSuccess(data, token) {
  // console.log("validateTokenSuccess created");
  return {
    type: VALIDATE_TOKEN_SUCCESS,
    data,
    token,
  };
}

export function validateTokenFailed() {
  // console.log("validateTokenFailed created");
  return {
    type: VALIDATE_TOKEN_FAILED,
  };
}
