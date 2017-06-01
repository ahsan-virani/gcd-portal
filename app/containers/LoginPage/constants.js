/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FORM = 'boilerplate/Login/CHANGE_FORM';
export const LOGIN = 'boilerplate/Login/LOGIN';
export const LOGIN_COMPLETED = 'boilerplate/Login/LOGIN_COMPLETED';
export const LOGIN_FAILED = 'boilerplate/Login/LOGIN_FAILED';
