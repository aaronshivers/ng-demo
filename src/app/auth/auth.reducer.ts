import { User } from './user';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './action-types';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state: AuthState = initialAuthState, action) => {
    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state: AuthState) => {
    return {
      user: undefined,
    };
  }),
);
