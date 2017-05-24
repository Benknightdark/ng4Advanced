import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';
import { Page1Component } from "app/page1/page1.component";
import { Page2Component } from "app/page2/page2.component";
import { ErrorComponent } from "app/error/error.component";
import { fallbackRoute } from "app/share/fallback-route";
import { DashboardsComponent } from "app/dashboards/dashboards.component";
import { CardsComponent } from "app/cards/cards.component";
import { LayoutComponent } from "app/layout/layout.component";
import { LoginComponent } from "app/login/login.component";
import { LoginGuard } from "app/login.guard";

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: '', component: DashboardsComponent, canActivate: [LoginGuard] },
      { path: 'dashboard', component: DashboardsComponent, canActivate: [LoginGuard] },
      { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule',canActivate: [LoginGuard] },
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true

    , enableTracing: false,
    preloadingStrategy: PreloadAllModules

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
