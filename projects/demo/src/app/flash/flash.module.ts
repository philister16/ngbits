import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlashRoutingModule } from './flash-routing.module';
import { FlashComponent } from './flash.component';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';
import { NgbitFlashModule } from 'projects/ngbits/src/public-api';


@NgModule({
  declarations: [FlashComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbitFlashModule,
    HighlightModule,
    FlashRoutingModule
  ]
})
export class FlashModule { }
