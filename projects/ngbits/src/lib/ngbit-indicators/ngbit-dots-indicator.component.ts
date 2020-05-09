import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-dots-indicator',
    template: `
    <svg [style.height]="height" preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" [attr.fill]="color">
        <circle cx="15" cy="50" r="15">
            <animate attributeName="r" from="15" to="15"
                    begin="0s" [attr.dur]="duration"
                    values="15;9;15" calcMode="linear"
                    repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" [attr.dur]="duration"
                    values="1;.5;1" calcMode="linear"
                    repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="9" fill-opacity="0.3">
            <animate attributeName="r" from="9" to="9"
                    begin="0s" [attr.dur]="duration"
                    values="9;15;9" calcMode="linear"
                    repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="0.5" to="0.5"
                    begin="0s" [attr.dur]="duration"
                    values=".5;1;.5" calcMode="linear"
                    repeatCount="indefinite" />
        </circle>
        <circle cx="85" cy="50" r="15">
            <animate attributeName="r" from="15" to="15"
                    begin="0s" [attr.dur]="duration"
                    values="15;9;15" calcMode="linear"
                    repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" [attr.dur]="duration"
                    values="1;.5;1" calcMode="linear"
                    repeatCount="indefinite" />
        </circle>
    </svg>
    `,
    styles: []
})
export class NgbitDotsIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
