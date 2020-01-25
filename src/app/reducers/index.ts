import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer } from '../auth/auth.reducer';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
