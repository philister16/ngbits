import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-ngbit-pulse-indicator-button',
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="17.5" y="30" width="16" height="40" fill="currentColor">
                    <animate attributeName="y" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                    keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                    keyTimes="0;0.5;1" values="72;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
                </rect>
                <rect x="42.5" y="30" width="16" height="40" fill="currentColor">
                    <animate attributeName="y" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                    keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
                    <animate attributeName="height" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                    keyTimes="0;0.5;1" values="64.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
                </rect>
                    <rect x="67.5" y="30" width="16" height="40" fill="currentColor">
                    <animate attributeName="y" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                    keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                    <animate attributeName="height" repeatCount="indefinite" [attr.dur]="duration" calcMode="spline"
                    keyTimes="0;0.5;1" values="64.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
                </rect>
            </svg>
        </ng-template>
    `,
    styles: [
        `
            svg {
                height: 1.3em;
                width: 1.3em;
                position: relative;
                bottom: 0.05em;
            }
            .text {
                margin: 0 0.125em;
            }
        `
    ]
})
export class NgbitPulseIndicatorButtonComponent {
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
