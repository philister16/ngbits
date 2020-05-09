import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-ripple-indicator',
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        [style.height]="height" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="14.2943" fill="none" [attr.stroke]="color" stroke-width="8">
        <animate attributeName="r" repeatCount="indefinite"
        [attr.dur]="duration" values="0;40" keyTimes="0;1"
        keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.7s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite"
        [attr.dur]="duration" values="1;0" keyTimes="0;1"
        keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.7s"></animate>
        </circle>
        <circle cx="50" cy="50" r="33.7366" fill="none" [attr.stroke]="color" stroke-width="8">
        <animate attributeName="r" repeatCount="indefinite"
        [attr.dur]="duration" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
        <animate attributeName="opacity" repeatCount="indefinite"
        [attr.dur]="duration" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
        </circle>
    </svg>
    `,
    styles: []
})
export class NgbitRippleIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
