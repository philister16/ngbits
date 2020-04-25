import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-ngbit-notch-indicator-button',
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="12" r="35"
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
        </ng-template>
    `,
    styles: [
        `
            svg {
                height: 1.12em;
                width: 1.12em;
                position: relative;
                bottom: 0.1em;
            }
            .text {
                margin: 0 0.125em;
            }
        `
    ]
})
export class NgbitNotchIndicatorButtonComponent {
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
