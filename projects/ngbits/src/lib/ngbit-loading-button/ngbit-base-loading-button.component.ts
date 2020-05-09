import { Component, Input } from '@angular/core';

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
  dimensions: { width: number, height: number };
}
