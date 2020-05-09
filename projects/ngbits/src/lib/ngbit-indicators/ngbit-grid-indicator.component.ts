import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-grid-indicator',
    template: `
          <svg [style.height]="height" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" [attr.fill]="color"
            preserveAspectRatio="xMidYMid">
        <circle cx="12" cy="12" r="12">
            <animate attributeName="fill-opacity"
              begin="0s" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="12" cy="50" r="12" fill-opacity=".5">
            <animate attributeName="fill-opacity"
              begin="100ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="12" r="12">
            <animate attributeName="fill-opacity"
              begin="300ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="12">
            <animate attributeName="fill-opacity"
              begin="600ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="88" cy="12" r="12">
            <animate attributeName="fill-opacity"
              begin="800ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="88" cy="50" r="12">
            <animate attributeName="fill-opacity"
              begin="400ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="12" cy="88" r="12">
            <animate attributeName="fill-opacity"
              begin="700ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="88" r="12">
            <animate attributeName="fill-opacity"
              begin="500ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="88" cy="88" r="12">
            <animate attributeName="fill-opacity"
              begin="200ms" [attr.dur]="duration"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
      </svg>
    `,
    styles: [
        `
        svg {
            position: relative;
            bottom: 0.05em;
        }
        `
    ]
})
export class NgbitGridIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
