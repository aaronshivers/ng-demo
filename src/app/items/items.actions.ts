import { createAction, props } from '@ngrx/store';
import { Item } from './item';

// action types
const ADD_ITEM = '[ITEMS] Add Item';
export const GET_ITEMS = '[ITEMS] Get Items';
export const GET_ITEMS_SUCCESS = '[ITEMS] Get Items Success';
export const SET_ITEMS = '[ITEMS] Set Items';

// actions
export const addItem = createAction(ADD_ITEM, props<{ item: Item }>());
export const getItems = createAction(GET_ITEMS);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS);
export const setItems = createAction(SET_ITEMS);
