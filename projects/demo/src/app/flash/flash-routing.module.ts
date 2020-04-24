import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashComponent } from './flash.component';


const routes: Routes = [
  {
    path: '',
    component: FlashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashRoutingModule { }
