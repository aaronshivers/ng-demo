import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.scss' ],
})
export class ItemsComponent implements OnInit {
  @ViewChild('f', { static: false }) itemForm: NgForm;
  item = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.item = this.itemForm.value.itemData.item;

    console.log(this.item);
  }
}
