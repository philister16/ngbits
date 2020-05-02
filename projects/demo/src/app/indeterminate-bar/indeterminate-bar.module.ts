import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndeterminateBarRoutingModule } from './indeterminate-bar-routing.module';
import { IndeterminateBarComponent } from './indeterminate-bar.component';
import { NgbitIndeterminateBarModule } from 'projects/ngbits/src/public-api';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [IndeterminateBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HighlightModule,
    NgbitIndeterminateBarModule,
    IndeterminateBarRoutingModule
  ]
})
export class IndeterminateBarModule { }
