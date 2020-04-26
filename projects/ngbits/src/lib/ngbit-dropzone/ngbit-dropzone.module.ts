import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbitDropzoneDirective } from './ngbit-dropzone.directive';

const ASSETS = [
    NgbitDropzoneDirective
];

@NgModule({
    declarations: ASSETS,
    imports: [
        CommonModule
    ],
    exports: ASSETS
})
export class NgbitDropzoneModule { }
