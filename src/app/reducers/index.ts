import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from '../auth/auth.reducer';
import { itemsReducer, ItemsState } from '../items/items.reducer';

export interface AppState {
  auth: AuthState;
  items: ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  items: itemsReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
