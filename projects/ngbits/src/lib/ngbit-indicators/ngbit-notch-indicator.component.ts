import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-notch-indicator',
    template: `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid" [style.height]="height">
                <circle cx="50" cy="50" fill="none" [attr.stroke]="color" stroke-width="12" r="35"
                    stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(297.953 50 50)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        [attr.dur]="duration"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1">
                    </animateTransform>
                </circle>
            </svg>
    `,
    styles: []
})
export class NgbitNotchIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
