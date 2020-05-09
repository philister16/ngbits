import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbitNotchIndicatorButtonComponent } from './ngbit-notch-indicator-button.component';
import { NgbitEclipseIndicatorButtonComponent } from './ngbit-eclipse-indicator-button.component';
import { NgbitBottleIndicatorButtonComponent } from './ngbit-bottle-indicator-button.component';
import { NgbitArrowIndicatorButtonComponent } from './ngbit-arrow-indicator-button.component';
import { NgbitPulseIndicatorButtonComponent } from './ngbit-pulse-indicator-button.component';
import { NgbitCircleIndicatorButtonComponent } from './ngbit-circle-indicator-button.component';
import { NgbitIndicatorsModule } from '../ngbit-indicators/ngbit-indicators.module';
import { NgbitCubeIndicatorButtonComponent } from './ngbit-cube-indicator-button.component';
import { NgbitRippleIndicatorButtonComponent } from './ngbit-ripple-indicator-button.component';
import { NgbitDotsIndicatorButtonComponent } from './ngbit-dots-indicator-button.component';
import { NgbitGridIndicatorButtonComponent } from './ngbit-grid-indicator-button.component';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

const ASSETS = [
    NgbitNotchIndicatorButtonComponent,
    NgbitEclipseIndicatorButtonComponent,
    NgbitBottleIndicatorButtonComponent,
    NgbitArrowIndicatorButtonComponent,
    NgbitPulseIndicatorButtonComponent,
    NgbitCircleIndicatorButtonComponent,
    NgbitCubeIndicatorButtonComponent,
    NgbitRippleIndicatorButtonComponent,
    NgbitDotsIndicatorButtonComponent,
    NgbitGridIndicatorButtonComponent
];

@NgModule({
    declarations: [NgbitBaseIndicatorButtonComponent, ...ASSETS],
    imports: [
        CommonModule,
        NgbitIndicatorsModule
    ],
    exports: ASSETS
})
export class NgbitIndicatorButtonModule { }
