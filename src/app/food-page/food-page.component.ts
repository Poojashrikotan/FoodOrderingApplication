import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { FoodServiceService } from '../service/food/food-service.service';
import { Foods } from '../shared/model/food';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Foods;
  constructor( private route:ActivatedRoute, private foodService:FoodServiceService,private cartpage:CartService,private router:Router) { 
    route.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodService.getFoodById(params['id']);
    })
  
  }

  ngOnInit(): void {
  }
  addToCart()
  {
    this.cartpage.addToCart(this.food);
    this.router.navigateByUrl('/cart-page'); 
  }

}
