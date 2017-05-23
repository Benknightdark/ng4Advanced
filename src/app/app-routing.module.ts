import { NgModule } from '@angular/core';
import { Routes, RouterModule,Route } from '@angular/router';
import { Page1Component } from "app/page1/page1.component";
import { Page2Component } from "app/page2/page2.component";
import { ErrorComponent } from "app/error/error.component";
import { fallbackRoute } from "app/share/fallback-route";
import { DashboardsComponent } from "app/dashboards/dashboards.component";
import { CardsComponent } from "app/cards/cards.component";

 const routes: Routes = [
   { path: 'dashboard', component: DashboardsComponent },
    { path: 'cards', component: CardsComponent }, fallbackRoute ];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
