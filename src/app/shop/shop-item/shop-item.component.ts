import {Component, Input, OnInit} from '@angular/core';
import {ItemModel} from '../../models/item.model';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() item: ItemModel;
  @Input() index: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    alert(this.item.naamAlbum + ' added to cart');
    this.cartService.items.push(this.item);
  }
}
