import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocknloadRoutingModule } from './blocknload-routing.module';
import { BlocknloadComponent } from './blocknload.component';
import { CustomTestComponent } from './custom-test.component';


@NgModule({
  declarations: [
    BlocknloadComponent,
    CustomTestComponent
  ],
  imports: [
    CommonModule,
    BlocknloadRoutingModule
  ]
})
export class BlocknloadModule { }
