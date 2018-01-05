import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input('placeholder') placeholder;
  @Input('items') items;
  itemsCtrl: FormControl;
  constructor() {
    this.itemsCtrl = new FormControl();
   }

  ngOnInit() {
  }

}
