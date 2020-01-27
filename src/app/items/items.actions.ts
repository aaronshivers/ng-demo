import { createAction, props } from '@ngrx/store';
import { Item } from './item';

// action types
const ADD_ITEM = '[ITEMS] Add Item';
export const GET_ITEMS = '[ITEMS] Get Items';
const GET_ITEMS_SUCCESS = '[ITEMS] Get Items Success';

// actions
export const addItem = createAction(ADD_ITEM, props<{ item: Item }>());
export const getItems = createAction(GET_ITEMS);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS);
