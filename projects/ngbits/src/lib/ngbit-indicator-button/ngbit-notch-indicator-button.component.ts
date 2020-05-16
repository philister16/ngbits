import { Component } from '@angular/core';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

@Component({
    selector: 'ngbit-notch-indicator-button',
    template: `
        <button [ngClass]="{ 'cursor': disabled }" [class]="btnClass" [type]="btnType" [disabled]="disabled" (click)="onClick($event)">
            <span *ngIf="loader && position === 'start'">
                <ngbit-notch-indicator [speed]="speed"></ngbit-notch-indicator>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ngbit-notch-indicator [speed]="speed"></ngbit-notch-indicator>
            </span>
        </button>
    `,
    styles: [
        `
        .text {
            margin: 0 0.125em;
        }
        .cursor {
            cursor: auto;
        }
        `
    ]
})
export class NgbitNotchIndicatorButtonComponent extends NgbitBaseIndicatorButtonComponent {
    constructor() {
        super();
    }
}
