import { Component, Input } from '@angular/core';
import { NgbitBaseIndicatorButtonComponent } from './ngbit-base-indicator-button.component';

@Component({
    selector: 'ngbit-eclipse-indicator-button',
    template: `
        <button [ngClass]="{ 'cursor': disabled }" [class]="btnClass" [type]="btnType" [disabled]="disabled" (click)="onClick($event)">
            <span *ngIf="loader && position === 'start'">
                <ngbit-eclipse-indicator [speed]="speed"></ngbit-eclipse-indicator>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ngbit-eclipse-indicator [speed]="speed"></ngbit-eclipse-indicator>
            </span>
        </button>
    `,
    styles: [
        `
            .text {
                margin: 0 0.375em;
            }
            .cursor {
                cursor: auto;
            }
        `
    ]
})
export class NgbitEclipseIndicatorButtonComponent extends NgbitBaseIndicatorButtonComponent {
    constructor() {
        super();
    }
}
