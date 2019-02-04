import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent implements OnInit {
  time: boolean;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.clearCart();
    this.time = new Date().getHours() < 22 && new Date().getHours() > 9;
  }

}
