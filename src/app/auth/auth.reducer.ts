import { User } from './user';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,

  on(
    AuthActions.login, (state: AuthState = initialAuthState, action: { user: User }) => {
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
