import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocknloadRoutingModule } from './blocknload-routing.module';
import { BlocknloadComponent } from './blocknload.component';
import { CustomTestComponent } from './custom-test.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HighlightModule } from 'ngx-highlightjs';
import { NgbitIndicatorsModule } from 'projects/ngbits/src/public-api';
import { CustomTestFullComponent } from './custom-test-full.component';


@NgModule({
  declarations: [
    BlocknloadComponent,
    CustomTestComponent,
    CustomTestFullComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HighlightModule,
    NgbitIndicatorsModule,
    BlocknloadRoutingModule
  ]
})
export class BlocknloadModule { }
