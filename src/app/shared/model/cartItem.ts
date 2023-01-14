import { Foods } from "./food";

export class cartItem{
  static food: any;
    constructor(food:Foods){
        this.food=food;
    }
    food:Foods;
    quantity:number=1;
     get price():number{
        return this.food.price*this.quantity;
     }

}