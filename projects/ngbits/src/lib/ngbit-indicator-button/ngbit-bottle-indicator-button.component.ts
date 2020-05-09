import { Component, Input } from '@angular/core';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

@Component({
    selector: 'ngbit-bottle-indicator-button',
    template: `
        <button [class]="btnClass" [type]="btnType">
            <span *ngIf="loader && position === 'start'">
                <ngbit-bottle-indicator [speed]="speed"></ngbit-bottle-indicator>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ngbit-bottle-indicator [speed]="speed"></ngbit-bottle-indicator>
            </span>
        </button>
    `,
    styles: [
        `
            .text {
                margin: 0 0.375em;
            }
        `
    ]
})
export class NgbitBottleIndicatorButtonComponent extends NgbitBaseIndicatorButtonComponent {
    constructor() {
        super();
    }
}
