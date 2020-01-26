import { Item } from './item';
import { createReducer, on } from '@ngrx/store';
import * as itemsActions from './items.actions';

export interface ItemsState {
  items: Item[];
}

const initialItemsState: ItemsState = {
  items: [],
};

export const itemsReducer = createReducer(
  initialItemsState,

  on(
    itemsActions.addItem,
    (state: ItemsState, action: { item: Item }): ItemsState => {
      return { ...state, items: [ ...state.items, action.item ] };
    },
  ),
);

