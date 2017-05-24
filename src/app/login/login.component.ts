import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/service/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private fb: FormBuilder) { }
  LoginForm: FormGroup;
  ngOnInit() {
    this.LoginForm = this.fb.group({
      name: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
    });
  }
  onSubmit() {
    console.log(this.LoginForm.value)
    this.LoginService.Login();

  }

}
