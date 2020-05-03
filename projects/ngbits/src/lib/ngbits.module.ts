import { NgModule } from '@angular/core';
import { NgbitFlashModule } from './ngbit-flash/ngbit-flash.module';
import { NgbitIndicatorButtonModule } from './ngbit-indicator-button/ngbit-indicator-button.module';
import { NgbitLoadingButtonModule } from './ngbit-loading-button/ngbit-loading-button.module';
import { NgbitDropzoneModule } from './ngbit-dropzone/ngbit-dropzone.module';
import { NgbitIndeterminateBarModule } from './ngbit-indeterminate-bar/ngbit-indeterminate-bar.module';
import { NgbitPrettyFileInputModule } from './ngbit-pretty-file-input/ngbit-pretty-file-input.module';

@NgModule({
  declarations: [],
  imports: [
    NgbitFlashModule,
    NgbitIndicatorButtonModule,
    NgbitLoadingButtonModule,
    NgbitDropzoneModule,
    NgbitIndeterminateBarModule,
    NgbitPrettyFileInputModule
  ],
  exports: []
})
export class NgbitsModule { }
