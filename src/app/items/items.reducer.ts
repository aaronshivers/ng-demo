import { Item } from './item';
import { createReducer, on } from '@ngrx/store';
import * as itemsActions from './items.actions';

export interface ItemsState {
  item: Item;
}

const initialItemsState: ItemsState = {
  item: undefined,
};

export const itemsReducer = createReducer(
  initialItemsState,

  on(
    itemsActions.addItem, (state: ItemsState, action: { item: Item }) => {
      return {
        item: action.item,
      };
    },
  ),
);
