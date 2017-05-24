import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "app/service/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private fb: FormBuilder,private router: Router) { }
  LoginForm: FormGroup;
  ngOnInit() {
    if (JSON.parse(localStorage.getItem("token")) ) {
         this.router.navigate(['/']);
    }
    this.LoginForm = this.fb.group({
      Username: ["", Validators.compose([Validators.required])],
      Password: ["", Validators.compose([Validators.required])],
    });
  }
  onSubmit() {
    console.log(this.LoginForm.value)

    this.LoginService.Login(this.LoginForm.value).subscribe(r=>{
      console.log(r)
      if(r===true){
         this.router.navigate(['/']);
      }else{
        confirm("帳密錯誤")
      }
    });

  }

}
