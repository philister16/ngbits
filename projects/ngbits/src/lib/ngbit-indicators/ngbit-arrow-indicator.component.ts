import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-arrow-indicator',
    template: `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            [style.height]="height"
            preserveAspectRatio="xMidYMid">
            <g transform="rotate(290.127 50 50)">
                <path
                    d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
                    fill="none"
                    [attr.stroke]="color"
                    stroke-width="12"></path>
                <path d="M49 3L49 27L61 15L49 3" [attr.fill]="color"></path>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    [attr.dur]="duration" values="0 50 50;360 50 50"
                    keyTimes="0;1">
                </animateTransform>
            </g>
        </svg>
    `,
    styles: []
})
export class NgbitArrowIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
