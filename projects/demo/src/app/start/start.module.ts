import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { StartComponent } from './start.component';


@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    HighlightModule,
    StartRoutingModule
  ]
})
export class StartModule { }
