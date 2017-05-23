import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ErrorComponent } from './error/error.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './charts/flot/flot.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    ErrorComponent,
    DashboardsComponent,
    CardsComponent,
    FlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
