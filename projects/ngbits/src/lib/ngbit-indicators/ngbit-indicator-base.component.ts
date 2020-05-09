import { Component, Input } from '@angular/core';
import { NgbitService } from '../ngbit.service';

@Component({
    selector: 'ngbit-indicator-base',
    template: ``,
    styles: []
})
export class NgbitIndicatorBaseComponent {
    @Input() color = 'currentColor';
    @Input() height = '1em';
    @Input() set speed(speed: 'slow' | 'medium' | 'fast') {
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
    duration = '1s';
}
