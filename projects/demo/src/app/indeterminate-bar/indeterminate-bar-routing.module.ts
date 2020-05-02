import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndeterminateBarComponent } from './indeterminate-bar.component';


const routes: Routes = [
  {
    path: '',
    component: IndeterminateBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndeterminateBarRoutingModule { }
