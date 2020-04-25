import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-ngbit-arrow-indicator-button',
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
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid">
                <g transform="rotate(290.127 50 50)">
                    <path
                        d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="12"></path>
                    <path d="M49 3L49 27L61 15L49 3" fill="currentColor"></path>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        [attr.dur]="duration" values="0 50 50;360 50 50"
                        keyTimes="0;1">
                    </animateTransform>
                </g>
            </svg>
        </ng-template>
    `,
    styles: [
        `
            svg {
                height: 1.12em;
                width: 1.12em;
                position: relative;
                bottom: 0.08em;
            }
            .text {
                margin: 0 0.125em;
            }
        `
    ]
})
export class NgbitArrowIndicatorButtonComponent {
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
