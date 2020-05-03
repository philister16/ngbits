import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrettyFileInputRoutingModule } from './pretty-file-input-routing.module';
import { PrettyFileInputComponent } from './pretty-file-input.component';
import { NgbitPrettyFileInputModule } from 'projects/ngbits/src/public-api';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PrettyFileInputComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HighlightModule,
    NgbitPrettyFileInputModule,
    PrettyFileInputRoutingModule
  ]
})
export class PrettyFileInputModule { }
