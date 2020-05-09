import { NgModule } from '@angular/core';
import { NgbitNotchIndicatorComponent } from './ngbit-notch-indicator.component';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';
import { NgbitEclipseIndicatorComponent } from './ngbit-eclipse-indicator.component';
import { NgbitBottleIndicatorComponent } from './ngbit-bottle-indicator.component';
import { NgbitArrowIndicatorComponent } from './ngbit-arrow-indicator.component';
import { NgbitPulseIndicatorComponent } from './ngbit-pulse-indicator.component';
import { NgbitCircleIndicatorComponent } from './ngbit-circle-indicator.component';
import { NgbitRippleIndicatorComponent } from './ngbit-ripple-indicator.component';
import { NgbitCubeIndicatorComponent } from './ngbit-cube-indicator.component';
import { NgbitDotsIndicatorComponent } from './ngbit-dots-indicator.component';
import { NgbitGridIndicatorComponent } from './ngbit-grid-indicator.component';

const assets = [
    NgbitNotchIndicatorComponent,
    NgbitEclipseIndicatorComponent,
    NgbitBottleIndicatorComponent,
    NgbitArrowIndicatorComponent,
    NgbitPulseIndicatorComponent,
    NgbitCircleIndicatorComponent,
    NgbitRippleIndicatorComponent,
    NgbitCubeIndicatorComponent,
    NgbitDotsIndicatorComponent,
    NgbitGridIndicatorComponent
];

@NgModule({
    imports: [],
    declarations: [...assets, NgbitIndicatorBaseComponent],
    exports: assets
})
export class NgbitIndicatorsModule {

}
