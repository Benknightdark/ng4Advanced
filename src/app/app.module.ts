import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ErrorComponent } from './error/error.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from "app/login.guard";
import { LoginService } from "app/service/login.service";


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ErrorComponent,
    DashboardsComponent,
    CardsComponent,
    LoginComponent,
    LayoutComponent,


  ],
  imports: [
    BrowserModule,
         ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
