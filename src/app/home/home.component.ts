import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../service/food/food-service.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[]=[];
  constructor(private food:FoodServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
this.route.params.subscribe(param=>{
  if(param['searchItem'])
  this.foods=this.food.getAllFoodImages().filter(foods=>foods.name.toLowerCase().includes(param['searchItem'].toLowerCase()));
  else if (param['tag'])
  this.foods=this.food.getAllFoodByTag(param['tag']);
  else
  this.foods=this.food.getAllFoodImages();

})
  }
}
