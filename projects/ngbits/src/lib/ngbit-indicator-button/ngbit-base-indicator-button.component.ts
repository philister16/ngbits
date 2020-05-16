import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() disabled = false;
    @Output() btnClick = new EventEmitter<MouseEvent>();

    onClick(event: MouseEvent) {
        event.stopPropagation();
        this.btnClick.emit(event);
    }
}
