import { Injectable } from '@angular/core';
import { cart } from '../shared/model/cart';
import { cartItem } from '../shared/model/cartItem';
import { Foods } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: cart = new cart();

  addToCart(food: Foods): void {
    let CartItem = this.cart.items.find(item => item.food.id === food.id);
    if (CartItem) {
      this.changeQuantity(food.id, CartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  
  getcart(): cart {
    return this.cart;
  }
}