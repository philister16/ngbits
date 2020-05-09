import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-pulse-indicator',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" [style.height]="height">
            <rect x="17.5" y="30" width="16" height="40" [attr.fill]="color">
                <animate attributeName="y" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
                <animate attributeName="height" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                keyTimes="0;0.5;1" values="72;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
            </rect>
            <rect x="42.5" y="30" width="16" height="40" [attr.fill]="color">
                <animate attributeName="y" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
                <animate attributeName="height" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                keyTimes="0;0.5;1" values="64.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
            </rect>
                <rect x="67.5" y="30" width="16" height="40" [attr.fill]="color">
                <animate attributeName="y" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                <animate attributeName="height" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                keyTimes="0;0.5;1" values="64.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
            </rect>
        </svg>
    `,
    styles: []
})
export class NgbitPulseIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
