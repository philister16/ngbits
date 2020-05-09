import { Component } from '@angular/core';
import { NgbitIndicatorBaseComponent } from './ngbit-indicator-base.component';

@Component({
    selector: 'ngbit-circle-indicator',
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" [style.height]="height">
            <g transform="translate(80,50)">
            <g transform="rotate(0)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="1" transform="scale(1.08399 1.08399)">
            <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
            </circle>
            </g>
            </g><g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.875" transform="scale(1.14649 1.14649)">
            <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
            </circle>
            </g>
            </g><g transform="translate(50,80)">
            <g transform="rotate(90)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.75" transform="scale(1.20899 1.20899)">
            <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
            </circle>
            </g>
            </g><g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.625" transform="scale(1.27149 1.27149)">
            <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
            </circle>
            </g>
            </g><g transform="translate(20,50.00000000000001)">
            <g transform="rotate(180)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.5" transform="scale(1.33399 1.33399)">
            <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
            </circle>
            </g>
            </g><g transform="translate(28.78679656440357,28.786796564403577)">
            <g transform="rotate(225)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.375" transform="scale(1.39649 1.39649)">
            <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
            </circle>
            </g>
            </g><g transform="translate(49.99999999999999,20)">
            <g transform="rotate(270)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.25" transform="scale(1.45899 1.45899)">
            <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
            </circle>
            </g>
            </g><g transform="translate(71.21320343559643,28.78679656440357)">
            <g transform="rotate(315)">
            <circle cx="0" cy="0" r="6" [attr.fill]="color" fill-opacity="0.125" transform="scale(1.02149 1.02149)">
            <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1"
            keyTimes="0;1" [attr.dur]="duration" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" [attr.dur]="duration"
            repeatCount="indefinite" values="1;0" begin="0s"></animate>
            </circle>
            </g>
            </g>
        </svg>
    `,
    styles: []
})
export class NgbitCircleIndicatorComponent extends NgbitIndicatorBaseComponent {
    constructor() {
        super();
    }
}
