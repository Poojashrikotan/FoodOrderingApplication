import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  bgimage:string="/assets/bgSignUp.jpg";
 
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({ email: [''], password: [''] });
  }
  loginuser() {
    this._http.get<any>("http://localhost:3000/signin").subscribe(res => {
      const user = res.find(
        (a: any) => {
          return a.email === this.loginform.value.email && a.password === this.loginform.value.password
        })
      if (user) {
       // alert("Login Successfull");
        this.loginform.reset();
        this.route.navigate(['home'])
      }
      else {
        alert("User not found!!");
      }
    }, err => { alert("Error found!!") }
    )
  }
}
