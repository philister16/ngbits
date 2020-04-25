import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorButtonRoutingModule } from './indicator-button-routing.module';
import { IndicatorButtonComponent } from './indicator-button.component';
import { NgbitIndicatorButtonModule } from 'projects/ngbits/src/public-api';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IndicatorButtonComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HighlightModule,
    NgbitIndicatorButtonModule,
    IndicatorButtonRoutingModule
  ]
})
export class IndicatorButtonModule { }
