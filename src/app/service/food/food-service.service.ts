import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { tag } from 'src/app/shared/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }

 getFoodById(id:number):Foods{
  return this.getAllFoodImages().find(food=>food.id==id)!;
 }

  getALLTags():tag[]{
    return[
    {name:'All',count:10},
    {name:'Tasty',count:3},
    {name:'DesiFood',count:5},
    {name:'Indians Faveroute',count:1},
    {name:'Dose',count:2},
    {name:'GheeRice',count:1},
    {name:'Streetfood',count:3},
    {name:'Rolled Chapathi',count:3},
    {name:'Veggies',count:1},
    {name:'Vegitables',count:1}
    ];
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='All')
    return this.getAllFoodImages();
    else
    return this.getAllFoodImages().filter(food=>food.tags?.includes(tag));
  }
  getAllFoodImages():Foods[]
  {
return [
  {
    id:1,
    price:20,
    name:'Idli Sambar',
    favourite:false,
    star:5,
    tags:['Indians Faveroute','DesiFood'],
    imageUrl:'/assets/Foods-1.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },
  {
    id:2,
    price:50,
    name:'Masal Dose',
    favourite:false,
    star:4,
    tags:['Tasty','Dose','DesiFood'],
    imageUrl:'/assets/Foods-2.jpg',
    origins:['India','Russia'],
    cookTime:'20-30min',
  },
  {
    id:3,
    price:30,
    name:'Sev Bun',
    favourite:false,
    star:3,
    tags:['Mixture','Vegitables','Tasty'],
    imageUrl:'/assets/Foods-3.jpg',
    origins:['Italic'],
    cookTime:'20-30min',
  },
  {
    id:4,
    price:60,
    name:'Parata Platter',
    favourite:false,
    star:4,
    tags:['GheeRice','ButterMasala','Tasty'],
    imageUrl:'/assets/Foods-4.jpg',
    origins:['Chinees'],
    cookTime:'20-30min',
  },
  {
    id:5,
    price:50,
    name:'Vegitable Bath',
    favourite:false,
    star:4,
    tags:['Veggies','With Kurma'],
    imageUrl:'/assets/Foods-5.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },
  {
    id:6,
    price:20,
    name:'Samosa',
    favourite:false,
    star:4,
    tags:['DesiFood','Streetfood'],
    imageUrl:'/assets/Foods-6.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },
  {
    id:7,
    price:20,
    name:'Vada Sambar',
    favourite:false,
    star:4,
    tags:['Rolled Chapathi','Streetfood'],
    imageUrl:'/assets/Foods-7.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },
  {
    id:8,
    price:20,
    name:'',
    favourite:false,
    star:4,
    tags:['Rolled Chapathi','Streetfood'],
    imageUrl:'/assets/Foods-8.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },
  {
    id:9,
    price:20,
    name:'Masala Dose',
    favourite:false,
    star:4,
    tags:['DesiFood','Dose'],
    imageUrl:'/assets/Foods-9.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },
  {
    id:10,
    price:20,
    name:'Puri Baji',
    favourite:false,
    star:4,
    tags:['Rolled Chapathi','DesiFood','With Kurma'],
    imageUrl:'/assets/Foods-10.jpg',
    origins:['India'],
    cookTime:'20-30min',
  },

  // {
  //   id:'1',
  //   price:'20',
  //   name:'Idli Sambar',
  //   favourite:false,
  //   start:4,
  //   tags:['Indians Faveroute','DesiFood'],
  //   imageUrl:'/assets/Foods-1.jpg',
  //   origins:['India'],
  // },
  // {
  //   id:'1',
  //   price:'20',
  //   name:'Idli Sambar',
  //   favourite:false,
  //   start:4,
  //   tags:['Indians Faveroute','DesiFood'],
  //   imageUrl:'/assets/Foods-1.jpg',
  //   origins:['India'],
  // },
  // {
  //   id:'1',
  //   price:'20',
  //   name:'Idli Sambar',
  //   favourite:false,
  //   start:4,
  //   tags:['Indians Faveroute','DesiFood'],
  //   imageUrl:'/assets/Foods-1.jpg',
  //   origins:['India'],
  // },
  // {
  //   id:'1',
  //   price:'20',
  //   name:'Idli Sambar',
  //   favourite:false,
  //   start:4,
  //   tags:['Indians Faveroute','DesiFood'],
  //   imageUrl:'/assets/Foods-1.jpg',
  //   origins:['India'],
  // }
];
  }
}
// '/assets/Foods-1.jpg',
// '/assets/Foods-2.jpg',
// '/assets/Foods-3.jpg',
// '/assets/Foods-4.jpg',
// '/assets/Foods-5.jpg',
// '/assets/Foods-6.jpg',
// '/assets/Foods-7.jpg',
// '/assets/Foods-8.jpg',
// '/assets/Foods-9.jpg',
// '/assets/Foods-10.jpg',