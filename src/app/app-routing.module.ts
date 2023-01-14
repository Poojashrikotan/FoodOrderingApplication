import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'search/:searchItem',component:HomeComponent},
{path:'tag/:tag',component:HomeComponent},
{path:'food/:id',component:FoodPageComponent}, 
{path:'tag/:tag/food/:id',component:FoodPageComponent},
{path:'cart-page',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
