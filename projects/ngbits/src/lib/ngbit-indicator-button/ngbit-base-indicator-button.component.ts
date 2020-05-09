import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngbit-base-indicator-button',
    template: ``,
    styles: []
})
export class NgbitBaseIndicatorButtonComponent {
    @Input() loader = false;
    @Input() position: 'start' | 'end' = 'start';
    @Input() btnClass: string;
    @Input() btnType: string;
    @Input() speed: 'slow' | 'medium' | 'fast';
}
