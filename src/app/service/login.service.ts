import { Injectable } from '@angular/core';
import { Http ,Response, RequestOptions,Headers} from "@angular/http";
import { Router } from "@angular/router";
import { LoginModel } from "app/viewmodel/loginmodel";
import {Observable} from 'rxjs'
import 'rxjs'
@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }
  private _url="http://192.168.137.1:88/api/token"
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Login(LoginData:LoginModel):Observable<boolean>{
  return  this.http.post(this._url,JSON.stringify(LoginData),this.JSONoptions)
    .map((res:Response)=>

     {
        let token = res.json() && res.json().token;
        if (token) {
          console.log(token)
          localStorage.setItem('token', JSON.stringify({ username: LoginData.Username, token: token }));

          return true;
        } else {
          console.log('false')

          return false;
        }
     }
    )
   // localStorage.setItem("token", "1");
   //
  }
  Logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/Login']);
  }
}
