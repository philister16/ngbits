import { NgModule } from '@angular/core';
import { NgbitFlashModule } from './ngbit-flash/ngbit-flash.module';
import { NgbitIndicatorButtonModule } from './ngbit-indicator-button/ngbit-indicator-button.module';
import { NgbitLoadingButtonModule } from './ngbit-loading-button/ngbit-loading-button.module';
import { NgbitDropzoneModule } from './ngbit-dropzone/ngbit-dropzone.module';
import { NgbitIndeterminateBarModule } from './ngbit-indeterminate-bar/ngbit-indeterminate-bar.module';
import { NgbitPrettyFileInputModule } from './ngbit-pretty-file-input/ngbit-pretty-file-input.module';
import { NgbitIndicatorsModule } from './ngbit-indicators/ngbit-indicators.module';
import { NgbitBlocknloadModule } from './ngbit-blocknload/ngbit-blocknload.module';

@NgModule({
  declarations: [],
  imports: [
    NgbitFlashModule,
    NgbitIndicatorsModule,
    NgbitIndicatorButtonModule,
    NgbitLoadingButtonModule,
    NgbitDropzoneModule,
    NgbitIndeterminateBarModule,
    NgbitPrettyFileInputModule,
    NgbitBlocknloadModule
  ],
  exports: []
})
export class NgbitsModule { }
