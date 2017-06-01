import {
	CHANGE_FORM,
	REGISTER,
	REGISTER_COMPLETED,
	REGISTER_FAILED
} from './constants';

export function changeForm(newState) {
	return { type: CHANGE_FORM, newState };
}

export function register(email, password) {
	return {
		type: REGISTER,
		email,
		password,
	};
}

export function registerCompleted(data) {
	return {
		type: REGISTER_COMPLETED,
		data,
	};
}

export function registerFailed(data) {
	return {
		type: REGISTER_FAILED,
		data,
	};
}
