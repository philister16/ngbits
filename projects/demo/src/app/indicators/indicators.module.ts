import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorsRoutingModule } from './indicators-routing.module';
import { IndicatorsComponent } from './indicators.component';
import { NgbitIndicatorsModule } from 'projects/ngbits/src/public-api';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IndicatorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HighlightModule,
    SharedModule,
    NgbitIndicatorsModule,
    IndicatorsRoutingModule
  ]
})
export class IndicatorsModule { }
