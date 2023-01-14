import { Component, Input, OnInit } from '@angular/core';
import { FoodServiceService } from '../service/food/food-service.service';
import { tag } from '../shared/tag';
import { Route } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() foodPageTag?:string[];
  @Input() justifyContent?:string="center";
tags:tag[]=[];
  constructor(private fs:FoodServiceService) { }

  ngOnInit(): void {
    if(!this.foodPageTag)
    this.tags=this.fs.getALLTags();
    console.log("getALLTags!");
  }
}

