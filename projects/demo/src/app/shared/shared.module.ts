import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTableComponent } from './api-table/api-table.component';
import { DemoBoxComponent } from './demo-box/demo-box.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

const ASSETS = [
  ApiTableComponent,
  DemoBoxComponent,
  MainLayoutComponent
];

@NgModule({
  declarations: ASSETS,
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: ASSETS
})
export class SharedModule { }
