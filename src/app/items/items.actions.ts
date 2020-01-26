import { createAction, props } from '@ngrx/store';
import { Item } from './item';

// action types
const ADD_ITEM = '[ITEMS] Add Item';
const GET_ITEMS = '[ITEMS] Get Items';

// actions
export const addItem = createAction(ADD_ITEM, props<{ item: Item }>());
export const getItems = createAction(GET_ITEMS);
