import { NgModule } from '@angular/core';
import { NgbitFlashComponent } from './ngbit-flash.componen';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NgbitFlashComponent],
    imports: [
        CommonModule
    ],
    exports: [NgbitFlashComponent]
})
export class NgbitFlashModule { }
