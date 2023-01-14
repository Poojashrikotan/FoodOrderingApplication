import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { cart } from '../shared/model/cart';
import { cartItem } from '../shared/model/cartItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   cart!: cart;
  // cartItem!: cartItem;
  constructor() { }
  // private cartserve:CartService

  ngOnInit(): void {
  }
  // changeQuantity(cartItem:cartItem,quantityInstring:string){
  //   const quantity=parseInt(quantityInstring);
  //   this.cartserve.changeQuantity(cartItem.food.id,quantity);}

}
