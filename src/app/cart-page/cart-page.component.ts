import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FoodServiceService } from '../service/food/food-service.service';
import { cart } from '../shared/model/cart';
import { cartItem } from '../shared/model/cartItem';
//import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;
  isTop = window === window.top;

  
  @Input() cart!: cart;
  cartItem!: cartItem;
  constructor(private cartserve: CartService) {
    // ,private foodserve:FoodServiceService
    // let food=foodserve.getAllFoodImages();
    // cartserve.addToCart(food[1]);
    // cartserve.addToCart(food[2]);
    // cartserve.addToCart(food[3]);
    // cartserve.addToCart(food[4]);

    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartserve.getcart();
  }
  removeFromCart(cartItem: cartItem) {
    this.cartserve.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: cartItem, quantityInstring: string) {
    const quantity = parseInt(quantityInstring);
    this.cartserve.changeQuantity(cartItem.food.id, quantity);
  }

  // paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD",
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY",
  //         parameters: {
  //           gateway: "example",
  //           gatewayMerchantId: "exampleGatewayMerchantId"
  //         }
  //       }
  //     }
  //   ],
  //   merchantInfo: {
  //     merchantId: "12345678901234567890",
  //     merchantName: "Demo Merchant"
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPriceLabel: "Total",
  //     totalPrice: "100.00",
  //     currencyCode: "USD",
  //     countryCode: "US"
  //   }
  // };

  // onLoadPaymentData(event:any) {
  //   console.log("load payment data", event.detail);
  // }




//   paymentRequest = {
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [
//       {
//         type: "CARD",
//         parameters: {
//           allowedPaymentMethods: ["PAN_ONLY", "CRYPTOGRAM"],
//           allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
//         },
//         tokenizationSpecification: {
//           type: "PAYMENT_GATEWAY",
//           parameters: {
//             gateway: "example",
//             gatewayMerchantI: "exampleGatewayMerchantId",
//           }
//         }
//       }
//     ],
//     merchantInfo:{
//       merchantId:"123456789",
//       merchantName:"demo Merchant"
//     },
//     transactionInfo:{
//       totalpriceStatus:"FINAL",
//       totalPriceLable:"Total",
//       totalPrice:"100.00",
//       countryCode:"IND",
//       currencyCode:"INR",
//     }
//   };
// onLoadPaymentData(event:any):void{
//   console.log("Payment Gateway Details",event.details);
// }
}
