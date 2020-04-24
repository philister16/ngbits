import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingButtonComponent } from './loading-button.component';


const routes: Routes = [
  {
    path: '',
    component: LoadingButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingButtonRoutingModule { }
