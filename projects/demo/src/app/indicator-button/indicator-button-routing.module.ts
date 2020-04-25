import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicatorButtonComponent } from './indicator-button.component';


const routes: Routes = [
  {
    path: '',
    component: IndicatorButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicatorButtonRoutingModule { }
