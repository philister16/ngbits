import { NgModule } from '@angular/core';
import { NgbitDotsLoadingButtonComponent } from './ngbit-dots-loading-button.component';
import { CommonModule } from '@angular/common';
import { NgbitGridLoadingButtonComponent } from './ngbit-grid-loading-button.component';
import { NgbitIndicatorsModule } from '../ngbit-indicators/ngbit-indicators.module';
import { NgbitNotchLoadingButtonComponent } from './ngbit-notch-loading-button.component';
import { NgbitEclipseLoadingButtonComponent } from './ngbit-eclipse-loading-button.component';
import { NgbitBottleLoadingButtonComponent } from './ngbit-bottle-loading-button.component';
import { NgbitArrowLoadingButtonComponent } from './ngbit-arrow-loading-button.component';
import { NgbitPulseLoadingButtonComponent } from './ngbit-pulse-loading-button.component';
import { NgbitCircleLoadingButtonComponent } from './ngbit-circle-loading-button.component';
import { NgbitRippleLoadingButtonComponent } from './ngbit-ripple-loading-button.component';
import { NgbitCubeLoadingButtonComponent } from './ngbit-cube-loading-button.component';
import { NgbitBaseLoadingButtonComponent } from './ngbit-base-loading-button.component';

const assets = [
    NgbitNotchLoadingButtonComponent,
    NgbitEclipseLoadingButtonComponent,
    NgbitBottleLoadingButtonComponent,
    NgbitArrowLoadingButtonComponent,
    NgbitPulseLoadingButtonComponent,
    NgbitCircleLoadingButtonComponent,
    NgbitRippleLoadingButtonComponent,
    NgbitCubeLoadingButtonComponent,
    NgbitDotsLoadingButtonComponent,
    NgbitGridLoadingButtonComponent
];

@NgModule({
    declarations: [NgbitBaseLoadingButtonComponent, ...assets],
    imports: [
        CommonModule,
        NgbitIndicatorsModule
    ],
    exports: assets
})
export class NgbitLoadingButtonModule { }
