import { Component, Input } from '@angular/core';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

@Component({
    selector: 'ngbit-dots-indicator-button',
    template: `
        <button [ngClass]="{ 'cursor': disabled }" [class]="btnClass" [type]="btnType" [disabled]="disabled" (click)="onClick($event)">
            <span *ngIf="loader && position === 'start'">
                <ngbit-dots-indicator [speed]="speed"></ngbit-dots-indicator>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ngbit-dots-indicator [speed]="speed"></ngbit-dots-indicator>
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
export class NgbitDotsIndicatorButtonComponent extends NgbitBaseIndicatorButtonComponent {
    constructor() {
        super();
    }
}
