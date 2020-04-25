import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-ngbit-disk-indicator-button',
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
                <g transform="translate(50,50)">
                <g transform="scale(0.7)">
                <circle cx="0" cy="0" r="50" fill="currentColor" fill-opacity="0.33"></circle>
                <circle cx="0" cy="-28" r="15" fill="currentColor" transform="rotate(125.884)">
                    <animateTransform attributeName="transform" type="rotate"
                    [attr.dur]="duration" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
                </circle>
                </g>
                </g>
            </svg>
        </ng-template>
    `,
    styles: [
        `
            svg {
                height: 1.3em;
                width: 1.3em;
                position: relative;
                bottom: 0.1em;
            }
            .text {
                margin: 0 0.125em;
            }
        `
    ]
})
export class NgbitDiskIndicatorButtonComponent {
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
