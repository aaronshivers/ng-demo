import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ItemsActions from './items.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemService } from './item.service';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { ItemsState } from './items.reducer';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.GET_ITEMS),
    mergeMap(() => this.itemService.getItems().pipe(
      map(items => {
        return ({ type: ItemsActions.SET_ITEMS, items });
      }),
      catchError(() => EMPTY),
    )),
  ));

  constructor(
    private actions$: Actions,
    private itemService: ItemService,
    private store: Store<ItemsState>
  ) {}
}
