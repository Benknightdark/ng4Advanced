import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/service/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService:LoginService) { }

  ngOnInit() {
  }
  OnClickK() {
   this.LoginService.Login();

  }

}
