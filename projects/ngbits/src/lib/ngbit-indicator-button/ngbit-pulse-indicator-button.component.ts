import { Component, Input } from '@angular/core';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

@Component({
    selector: 'ngbit-pulse-indicator-button',
    template: `
        <button [ngClass]="{ 'cursor': disabled }" [class]="btnClass" [type]="btnType" [disabled]="disabled" (click)="onClick($event)">
            <span *ngIf="loader && position === 'start'">
                <ngbit-pulse-indicator [speed]="speed"></ngbit-pulse-indicator>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ngbit-pulse-indicator [speed]="speed"></ngbit-pulse-indicator>
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
export class NgbitPulseIndicatorButtonComponent extends NgbitBaseIndicatorButtonComponent {
    constructor() {
        super();
    }
}
