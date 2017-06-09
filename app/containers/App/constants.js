/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
// export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
// export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';
export const LOGIN = 'boilerplate/Login/LOGIN';
export const LOGIN_COMPLETED = 'boilerplate/App/LOGIN_COMPLETED';
export const LOGIN_FAILED = 'boilerplate/App/LOGIN_FAILED';
export const VALIDATE_TOKEN = 'boilerplate/App/VALIDATE_TOKEN';
export const VALIDATE_TOKEN_FAILED = 'boilerplate/App/VALIDATE_TOKEN_FAILED';
export const VALIDATE_TOKEN_SUCCESS = 'boilerplate/App/VALIDATE_TOKEN_SUCCESS';
