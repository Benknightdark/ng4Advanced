import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }
  Login() {
    localStorage.setItem("token", "1");
    this.router.navigate(['/']);
  }
  Logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/Login']);
  }
}
