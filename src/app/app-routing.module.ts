import { NgModule } from '@angular/core';
import { Routes, RouterModule,Route } from '@angular/router';
import { Page1Component } from "app/page1/page1.component";
import { Page2Component } from "app/page2/page2.component";
import { ErrorComponent } from "app/error/error.component";
import { fallbackRoute } from "app/share/fallback-route";

const routes: Routes = [
{path: '',redirectTo:'/page1',pathMatch: 'full' },

  {path: 'page1', component: Page1Component,data:{title:'page21'}},
  {path: 'page2', component: Page2Component},
 fallbackRoute
//{ path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
