import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngbit-eclipse-indicator-button',
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
            <svg xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(30 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(60 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                    values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.75s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(90 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(120 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(150 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                    values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.5s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(180 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(210 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(240 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                    values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.25s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(270 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(300 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                        values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                </rect>
                </g><g transform="rotate(330 50 50)">
                <rect x="24" y="4" rx="3" ry="6" width="12" height="24" fill="currentColor">
                    <animate attributeName="opacity"
                    values="1;0" keyTimes="0;1" [attr.dur]="duration" begin="0s" repeatCount="indefinite"></animate>
                </rect>
                </g>
            </svg>
        </ng-template>
    `,
    styles: [
        `
            svg {
                height: 1em;
                width: 1em;
                position: relative;
                bottom: 0.1em;
            }
            .text {
                margin: 0 0.375em;
            }
        `
    ]
})
export class NgbitEclipseIndicatorButtonComponent {
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
