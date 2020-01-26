import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from './item.service';
import { Item } from './item';
import { Store } from '@ngrx/store';
import { ItemsState } from './items.reducer';
import { addItem } from './items.actions';

@Component({
  selector: 'app-tasks',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.scss' ],
})
export class ItemsComponent implements OnInit {
  @ViewChild('f', { static: false }) itemForm: NgForm;
  item = {
    body: '',
  };

  constructor(
    private itemService: ItemService,
    private store: Store<ItemsState>,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.item.body = this.itemForm.value.itemData.body;

    this.itemService.postItem(this.item).subscribe((item: Item) => {
      this.store.dispatch(addItem({ item }));
    });
  }
}
