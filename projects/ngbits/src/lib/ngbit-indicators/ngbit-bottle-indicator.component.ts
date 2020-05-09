import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-bottle-indicator',
    template: `
        <svg
            [style.height]="height"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" stroke-width="8"
                [attr.stroke]="color" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none"
                stroke-linecap="round" transform="rotate(69.3374 50 50)">
                <animateTransform attributeName="transform"
                    type="rotate" repeatCount="indefinite"
                    [attr.dur]="duration" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>
    `,
    styles: []
})
export class NgbitBottleIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
