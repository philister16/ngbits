import { NgModule } from '@angular/core';
import { NgbitFlashModule } from './ngbit-flash/ngbit-flash.module';
import { NgbitIndicatorButtonModule } from './ngbit-indicator-button/ngbit-indicator-button.module';
import { NgbitLoadingButtonModule } from './ngbit-loading-button/ngbit-loading-button.module';
import { NgbitDropzoneModule } from './ngbit-dropzone/ngbit-dropzone.module';

@NgModule({
  declarations: [],
  imports: [
    NgbitFlashModule,
    NgbitIndicatorButtonModule,
    NgbitLoadingButtonModule,
    NgbitDropzoneModule
  ],
  exports: []
})
export class NgbitsModule { }
