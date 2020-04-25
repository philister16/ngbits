import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-ngbit-bottle-indicator-button',
    template: `
        <button [class]="btnClass" [type]="btnType">
            <span *ngIf="loader && position === 'start'">
                <ng-container *ngTemplateOutlet="icon"></ng-container>
            </span>
            <span class="text">
                <ng-content></ng-content>
            </span>
            <span *ngIf="loader && position === 'end'">
                <ng-container *ngTemplateOutlet="icon"></ng-container>
            </span>
        </button>

        <ng-template #icon>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" r="32" stroke-width="8"
                    stroke="currentColor" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none"
                    stroke-linecap="round" transform="rotate(69.3374 50 50)">
                    <animateTransform attributeName="transform"
                        type="rotate" repeatCount="indefinite"
                        [attr.dur]="duration" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
                </circle>
            </svg>
        </ng-template>
    `,
    styles: [
        `
            svg {
                height: 1.2em;
                width: 1.2em;
                position: relative;
                bottom: 0.1em;
            }
            .text {
                margin: 0 0.375em;
            }
        `
    ]
})
export class NgbitBottleIndicatorButtonComponent {
    @Input() loader = false;
    @Input() position: 'start' | 'end' = 'start';
    @Input() btnClass: string;
    @Input() btnType: string;
    duration = '1s';

    @Input()
    set speed(speed: 'slow' | 'medium' | 'fast') {
        switch (speed) {
            case 'slow':
                this.duration = '2s';
                break;
            case 'fast':
                this.duration = '0.5s';
                break;
            default:
                this.duration = '1s';
        }
    }
}
