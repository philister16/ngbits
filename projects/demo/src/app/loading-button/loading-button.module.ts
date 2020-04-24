import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingButtonRoutingModule } from './loading-button-routing.module';
import { LoadingButtonComponent } from './loading-button.component';
import { NgbitLoadingButtonModule } from 'projects/ngbits/src/public-api';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoadingButtonComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HighlightModule,
    NgbitLoadingButtonModule,
    LoadingButtonRoutingModule
  ]
})
export class LoadingButtonModule { }
