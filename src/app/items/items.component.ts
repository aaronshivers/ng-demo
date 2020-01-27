import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from './item.service';
import { Item } from './item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ItemActions from './items.actions';
import { ItemsState } from './items.reducer';

@Component({
  selector: 'app-tasks',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.scss' ],
})
export class ItemsComponent implements OnInit {
  @ViewChild('f', { static: false }) itemForm: NgForm;
  item = {
    id: undefined,
    body: '',
  };
  items$: Observable<Item[]>;

  constructor(
    private itemService: ItemService,
    private store: Store<{ items: Item[] }>,
  ) {
  }

  ngOnInit() {
    this.getItems();
  }

  onSubmit(): void {
    this.item.body = this.itemForm.value.itemData.body;

    this.itemService.postItem(this.item).subscribe((item: Item) => {
      this.store.dispatch(ItemActions.addItem({ item }));
    });
  }

  getItems(): void {
    this.store.dispatch(ItemActions.getItems());
    this.items$ = this.store.select((state: { items: Item[] }): Item[] => {
      // @ts-ignore
      return state.items.items;
    });
  }
}
