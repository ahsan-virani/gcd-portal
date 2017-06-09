import {
  CHANGE_FORM,
  LOGIN,
  // LOGIN_COMPLETED,
  // LOGIN_FAILED
} from './constants';

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState };
}

// export function login(email, password) {
//   return {
//     type: LOGIN,
//     email,
//     password,
//   };
// }
//
// export function loginCompleted(data) {
//   return {
//     type: LOGIN_COMPLETED,
//     data,
//   };
// }
//
// export function loginFailed(data) {
//   return {
//     type: LOGIN_FAILED,
//     data,
//   };
// }
