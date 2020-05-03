import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrettyFileInputComponent } from './pretty-file-input.component';


const routes: Routes = [
  {
    path: '',
    component: PrettyFileInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrettyFileInputRoutingModule { }
