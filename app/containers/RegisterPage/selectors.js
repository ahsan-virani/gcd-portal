/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectRegisterPage = (state) => state.get('register');

const makeSelectRegisterForm = () => createSelector(
	selectRegisterPage,
	(registerPageState) => {
		return registerPageState;
	}
);

const makeSelectFormState = createSelector(
	selectRegisterPage,
	(registerState) => {
		return registerState.get('formState');
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
	selectRegisterPage,
	makeSelectRegisterForm,
	makeSelectEmail,
	makeSelectPassword
};
