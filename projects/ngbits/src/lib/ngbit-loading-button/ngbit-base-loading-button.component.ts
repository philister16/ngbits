import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngbit-base-loading-button',
  template: ``,
  styles: []
})
export class NgbitBaseLoadingButtonComponent {
  @Input() loader = false;
  @Input() btnClass: string;
  @Input() btnType: 'button' | 'submit' = 'button';
  @Input() speed: 'slow' | 'medium' | 'fast';
  @Input() disabled = false;
  @Output() btnClick = new EventEmitter<MouseEvent>();
  dimensions: { width: number, height: number };

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.btnClick.emit(event);
  }
}
