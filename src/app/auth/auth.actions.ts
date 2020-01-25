import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const login = createAction('[LOGIN PAGE] User Login', props<{ user: User }>());
