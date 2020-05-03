import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngbit-indeterminate-bar',
    template: `
        <div class="progress {{ bsStyle ? 'bg-light' : '' }}" [style.backgroundColor]="background" [style.height]="height">
            <div class="{{ bsStyle ? 'bg-' + bsStyle : '' }}" [ngClass]="{ 'indeterminate': indeterminate, 'determinate': !indeterminate }"
            [style.backgroundColor]="color" [style.width]="progress + '%'"></div>
        </div>`,
    styles: [`
        .progress {
            position: relative;
            display: block;
            width: 100%;
            background-color: lightgrey;
            background-clip: padding-box;
            overflow: hidden;
        }
        .progress .determinate {
            width: 70%;
            position: absolute;
            top: 0;
            bottom: 0;
            background-color: dodgerblue;
            transition: width .3s linear;
        }
        .progress .indeterminate {
            background-color: dodgerblue;
        }
        .progress .indeterminate:before {
            content: '';
            position: absolute;
            background-color: inherit;
            top: 0;
            left: 0;
            bottom: 0;
            will-change: left, right;
            -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
            animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        }
        .progress .indeterminate:after {
            content: '';
            position: absolute;
            background-color: inherit;
            top: 0;
            left: 0;
            bottom: 0;
            will-change: left, right;
            -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
            animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
            -webkit-animation-delay: 1.15s;
            animation-delay: 1.15s;
        }

        @-webkit-keyframes indeterminate {
        0% {
            left: -35%;
            right: 100%; }
        60% {
            left: 100%;
            right: -90%; }
        100% {
            left: 100%;
            right: -90%; } }
        @keyframes indeterminate {
        0% {
            left: -35%;
            right: 100%; }
        60% {
            left: 100%;
            right: -90%; }
        100% {
            left: 100%;
            right: -90%; } }
        @-webkit-keyframes indeterminate-short {
        0% {
            left: -200%;
            right: 100%; }
        60% {
            left: 107%;
            right: -8%; }
        100% {
            left: 107%;
            right: -8%; } }
        @keyframes indeterminate-short {
        0% {
            left: -200%;
            right: 100%; }
        60% {
            left: 107%;
            right: -8%; }
        100% {
            left: 107%;
            right: -8%; } }
    `]
})
export class NgbitIndeterminateBarComponent {
    @Input() background = 'lightgrey';
    @Input() color = 'dodgerblue';
    @Input() indeterminate = true;
    @Input() progress = '50';
    @Input() height = '4px';
    @Input() bsStyle: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success' = null;
}
