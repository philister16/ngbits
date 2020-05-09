import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-cube-indicator',
    template: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        [style.height]="height" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="translate(26.666666666666668,26.666666666666668)">
        <rect x="-20" y="-20" width="28" height="28" [attr.fill]="color" transform="scale(1.10978 1.10978)">
            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite"
            [attr.dur]="duration" keyTimes="0;1" values="1.3000000000000001;1" begin="-0.3s"></animateTransform>
        </rect>
        </g>
        <g transform="translate(73.33333333333333,26.666666666666668)">
        <rect x="-20" y="-20" width="28" height="28" [attr.fill]="color" transform="scale(1.12478 1.12478)">
            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite"
            [attr.dur]="duration" keyTimes="0;1" values="1.3000000000000001;1" begin="-0.2s"></animateTransform>
        </rect>
        </g>
        <g transform="translate(26.666666666666668,73.33333333333333)">
        <rect x="-20" y="-20" width="28" height="28" [attr.fill]="color" transform="scale(1.00478 1.00478)">
            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite"
            [attr.dur]="duration" keyTimes="0;1" values="1.3000000000000001;1" begin="0s"></animateTransform>
        </rect>
        </g>
        <g transform="translate(73.33333333333333,73.33333333333333)">
        <rect x="-20" y="-20" width="28" height="28" [attr.fill]="color" transform="scale(1.13978 1.13978)">
            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite"
            [attr.dur]="duration" keyTimes="0;1" values="1.3000000000000001;1" begin="-0.1s"></animateTransform>
        </rect>
        </g>
    </svg>
    `,
    styles: [`
        svg {
            position: relative;
            bottom: 0.05em;
        }
    `]
})
export class NgbitCubeIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
