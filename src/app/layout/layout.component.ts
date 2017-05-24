import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "app/service/login.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private LoginService:LoginService) { }

  ngOnInit() {
  }
  OnClick(){
    this.LoginService.Logout();
  }

}
