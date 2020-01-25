import { User } from '../../user';
import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../../action-types';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),
);
