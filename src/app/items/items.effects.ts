import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ItemsActions from './items.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemService } from './item.service';
import { EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Injectable()
export class ItemsEffects {

  // @ts-ignore
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.GET_ITEMS),
    mergeMap(() => this.itemService.getItems().pipe(
      map(items => {
        console.log(items);
        return ({ type: ItemsActions.getItemsSuccess(), payload: items });
      }),
      catchError(() => EMPTY),
    )),
  ));

  constructor(
    private actions$: Actions,
    private itemService: ItemService,
    private httpClient: HttpClient,
  ) {
    console.log(this.loadItems$);
  }
}
