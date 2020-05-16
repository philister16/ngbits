import { Component, Input } from '@angular/core';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

@Component({
    selector: 'ngbit-grid-indicator-button',
    template: `
        <button [ngClass]="{ 'cursor': disabled }" [class]="btnClass" [type]="btnType" [disabled]="disabled" (click)="onClick($event)">
            <span *ngIf="loader && position === 'start'">
                <ngbit-grid-indicator [speed]="speed"></ngbit-grid-indicator>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ngbit-grid-indicator [speed]="speed"></ngbit-grid-indicator>
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
export class NgbitGridIndicatorButtonComponent extends NgbitBaseIndicatorButtonComponent {
    constructor() {
        super();
    }
}
