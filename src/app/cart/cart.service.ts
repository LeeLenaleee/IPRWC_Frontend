import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ItemModel} from '../models/item.model';


@Injectable()
export class CartService {
  items: ItemModel[] = [];
  itemsChanged = new Subject<ItemModel[]>();

  getItems() {
    return this.items.slice();
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }

  addItem(item: ItemModel) {
    this.items.push(item);
  }

  clearCart() {
    console.log(this.items);
    this.items.splice(0, this.items.length);
  }
}
