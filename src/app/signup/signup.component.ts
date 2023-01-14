import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TosterService } from '../service/toster.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup
bgimage:string="/assets/bgSignUp.jpg";
 
dangerTpl:string="Something went wrong";
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private tost:TosterService,private route:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({name:[''],email:[''],mobile:[''],password:['']});
  }
  showSuccess() {
   
		this.tost.show('Registered Successfully', { classname: 'bg-success text-light', delay: 10000 });
    console.log("hitting");
	}
  showDanger(dangerTpl:string) {
		this.tost.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
	}
  signup(){
 this.addnewuser().subscribe((res)=>{console.log(this.signupForm.value);
  this.route.navigate(['login']);
  this.signupForm.value;
  this.showSuccess();
  this.signupForm.reset()},err=>{alert("Something went wrong!!")});
  }
  addnewuser(){
    return this._http.post("http://localhost:3000/signin",this.signupForm.value);
    }
}
