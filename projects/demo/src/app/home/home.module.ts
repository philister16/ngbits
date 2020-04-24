import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HighlightModule } from 'ngx-highlightjs';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
