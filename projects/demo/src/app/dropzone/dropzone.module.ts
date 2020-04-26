import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropzoneRoutingModule } from './dropzone-routing.module';
import { DropzoneComponent } from './dropzone.component';
import { NgbitDropzoneModule } from 'projects/ngbits/src/public-api';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DropzoneComponent],
  imports: [
    CommonModule,
    SharedModule,
    HighlightModule,
    NgbitDropzoneModule,
    DropzoneRoutingModule
  ]
})
export class DropzoneModule { }
