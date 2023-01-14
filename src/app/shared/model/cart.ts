import { cartItem } from "./cartItem";

export class cart{
    items:cartItem[]=[];
    get totalprice():number{
        let totalprice=0;
        this.items.forEach(item=>{totalprice += item.price});
        return totalprice;
    }
}