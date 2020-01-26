import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from './item.service';
import { Item } from './item';
import { Store } from '@ngrx/store';
import { ItemsState } from './items.reducer';
import { addItem } from './items.actions';
import { Observable } from 'rxjs';

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
  items$: string[] = [];

  constructor(
    private itemService: ItemService,
    private store: Store<ItemsState>,
  ) { }

  ngOnInit() {
    this.getItems();
  }

  onSubmit(): void {
    this.item.body = this.itemForm.value.itemData.body;

    this.itemService.postItem(this.item).subscribe((item: Item) => {
      this.store.dispatch(addItem({ item }));
    });
  }

  getItems(): void {
    this.itemService.getItems().subscribe((items: Item) => {
      // @ts-ignore
      for (const item of items) {
        this.items$.push(JSON.stringify(item));
      }
    });
  }
}
