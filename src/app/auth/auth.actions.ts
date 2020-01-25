import { createAction, props } from '@ngrx/store';
import { User } from './user';

const LOGIN = '[LOGIN PAGE] User Login';
const LOGOUT = '[NAV COMPONENT] User Logout';

export const login = createAction(LOGIN, props<{ user: User }>());

export const logout = createAction(LOGOUT);
