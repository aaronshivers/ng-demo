import { createAction, props } from '@ngrx/store';
import { Item } from './item';

// action types
const ADD_ITEM = '[ITEMS] Add Item';

// actions
export const addItem = createAction(ADD_ITEM, props<{ item: Item }>());
