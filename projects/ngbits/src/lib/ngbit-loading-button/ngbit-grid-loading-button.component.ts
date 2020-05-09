import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbitBaseLoadingButtonComponent } from './ngbit-base-loading-button.component';

@Component({
  selector: 'ngbit-grid-loading-button',
  template: `
    <button #btn [class]="btnClass" [type]="btnType" [style.width]="dimensions?.width + 'px'" [style.height]="dimensions?.height + 'px'">
    <span *ngIf="!loader" class="text">
      <ng-content></ng-content>
    </span>
      <ngbit-grid-indicator *ngIf="loader" height="100%" [speed]="speed"></ngbit-grid-indicator>
    </button>
  `,
  styles: [
    `
      button {
        position: relative;
      }

      .text {
        white-space: nowrap;
      }
    `
  ]
})
export class NgbitGridLoadingButtonComponent extends NgbitBaseLoadingButtonComponent implements OnChanges {
  @ViewChild('btn') btn: ElementRef;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.loader && changes.loader.currentValue) {
      const { offsetWidth, offsetHeight } = this.btn.nativeElement;
      this.dimensions = { width: offsetWidth, height: offsetHeight };
    }
  }

}
