import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from "app/page1/page1.component";
import { Page2Component } from "app/page2/page2.component";
import { ErrorComponent } from "app/error/error.component";

const routes: Routes = [
{path: '',redirectTo:'/page1',pathMatch: 'full' },

  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
//  { path: '**', component:ErrorComponent }
{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
