import {Component, OnInit} from '@angular/core';
import {ItemService} from './item.service';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  items: ItemModel[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems();
    this.itemService.itemEmitter
      .subscribe(
        (item: ItemModel[]) => {
          this.items = item;
        }
      );
  }
}
