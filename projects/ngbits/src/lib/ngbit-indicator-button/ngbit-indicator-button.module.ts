import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbitNotchIndicatorButtonComponent } from './ngbit-notch-indicator-button.component';
import { NgbitEclipseIndicatorButtonComponent } from './ngbit-eclipse-indicator-button.component';
import { NgbitBottleIndicatorButtonComponent } from './ngbit-bottle-indicator-button.component';
import { NgbitArrowIndicatorButtonComponent } from './ngbit-arrow-indicator-button.component';
import { NgbitPulseIndicatorButtonComponent } from './ngbit-pulse-indicator-button.component';
import { NgbitDiskIndicatorButtonComponent } from './ngbit-disk-indicator-button.component';
import { NgbitCircleIndicatorButtonComponent } from './ngbit-circle-indicator-button.component';

const ASSETS = [
    NgbitNotchIndicatorButtonComponent,
    NgbitEclipseIndicatorButtonComponent,
    NgbitBottleIndicatorButtonComponent,
    NgbitArrowIndicatorButtonComponent,
    NgbitPulseIndicatorButtonComponent,
    NgbitDiskIndicatorButtonComponent,
    NgbitCircleIndicatorButtonComponent
];

@NgModule({
    declarations: ASSETS,
    imports: [
        CommonModule
    ],
    exports: ASSETS
})
export class NgbitIndicatorButtonModule { }
