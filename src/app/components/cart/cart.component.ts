import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal: number = 0;
  public done: boolean = false;

  constructor(private cartServie: CartService) { }

  ngOnInit(): void {
    this.cartServie.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartServie.getTotalPrice();
    })
  }

  removeItem(product:any) {
    this.cartServie.removeCartItem(product);
  }

  emptyCart() {
    this.cartServie.removeAllCart();
  }

  shopDone() {
    this.done = true;
    this.cartServie.removeAllCart();
  }

}
