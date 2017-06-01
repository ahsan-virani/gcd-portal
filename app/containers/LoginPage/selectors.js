/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectLoginPage = (state) => state.get('login');

const makeSelectLoginForm = () => createSelector(
  selectLoginPage,
  (loginPageState) => {
    return loginPageState;
  }
);

const makeSelectFormState = createSelector(
  selectLoginPage,
  (loginState) => {
    return loginState.get('formState');
  }
);

const makeSelectEmail = createSelector(
  makeSelectFormState,
  (formState) => { return formState.get('email'); }
);

const makeSelectPassword = createSelector(
  makeSelectFormState,
  (formState) => { return formState.get('password'); }
);

export {
  selectLoginPage,
  makeSelectLoginForm,
  makeSelectEmail,
  makeSelectPassword
};
