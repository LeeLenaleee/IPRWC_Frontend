import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Subscription} from 'rxjs';
import {ItemModel} from '../models/item.model';
import {Route, Router} from '@angular/router';

declare let paypal: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewChecked, OnDestroy {

  items: ItemModel[] = [];
  totalPrice = 0;
  private itemSubscription: Subscription;
  addScript = false;

  paypalConfig = {
    env: 'sandbox', // sandbox | production
    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create
    client: {
      sandbox:    'AXadSL7xq7h04ZNFuskpfP0VnyOu7PcAQac-1OvISqi5ZZArIMj4ceCuplHBpZQ7Z8h7uAhE09RIWYMv',
      production: '<insert production client id>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {amount: { total: this.totalPrice, currency: 'EUR' }}
          ]
        }
      });
    }, onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.router.navigate(['conformation']);
        });
    }, onCancel: function (data, actions) {
      // Show a cancel page or return to cart
      alert('Something went wrong please try again if this was not intentional');
    }, style: {
      size: 'responsive',
      color: 'blue',
      shape: 'pill',
      label: 'pay',
      tagline: 'true'
    }
  };

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.itemSubscription = this.cartService.itemsChanged
      .subscribe(
        (items: ItemModel[]) => {
          this.items = items;
        }
      );
    for (const item of this.items) {
      this.totalPrice += item.prijs;
    }
  }

  clearCart() {
    this.cartService.clearCart();
    console.log(this.cartService.items);
    this.cartService.items.splice(0, this.cartService.items.length);
  }

  updateItems() {
    this.totalPrice = 0;
    for (const item of this.items) {
      this.totalPrice += item.prijs;
    }
  }

  onDelete(index: number) {
    this.cartService.deleteItem(index);
    this.updateItems();
  }

  ngAfterViewChecked(): void {
    this.checkScript();
  }

  checkScript() {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout');
      });
    }
  }

  private addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

  add(item: ItemModel) {
    this.cartService.items.push(item);
    this.router.navigate(['/reload']);
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}
