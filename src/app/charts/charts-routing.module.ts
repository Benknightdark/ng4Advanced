import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from "./flot/flot.component";
const routes: Routes = [
       { path: '', component: FlotComponent },
      { path: 'flot', component: FlotComponent }
      ] ;


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
