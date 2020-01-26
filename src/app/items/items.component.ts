import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from './item.service';
import { Item } from './item';

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

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.item.body = this.itemForm.value.itemData.body;

    this.itemService.postItem(this.item).subscribe((item: Item) => {
      console.log(item);
    });

    console.log(this.item);
  }
}
