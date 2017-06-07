/*
 * HomeReducer
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
  CHANGE_FORM,
  // LOGIN,
  // LOGIN_COMPLETED,
  // LOGIN_FAILED,
} from './constants';


const initialState = fromJS({
  formState: {
    email: '',
    password: ''
  }
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return state
        .set('formState', action.newState);
      break;
      // case LOGIN:
      //   alert("Logged in with: " + action.email + ', ' + action.password);
      //   // var emptyFormState = fromJS({ email: '', password: '' });
      //   return state.set('currentlySending', true).set('errorMessage': '');
      //   break;
      // case LOGIN_COMPLETED:
      //   alert('logged in maka');
      //   console.log(action.data);
      //   return state.set('currentlySending', false).set('loggedIn', true);
      //   break;
      // case LOGIN_FAILED:
      //   alert('log in failed maka');
      //   console.log(action.data);
      //   return state.set('currentlySending', false).set('loggedIn', false);
      //   break;
    default:
      return state;
  }
}

export default loginReducer;
