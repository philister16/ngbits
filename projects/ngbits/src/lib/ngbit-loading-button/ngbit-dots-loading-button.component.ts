import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbitBaseLoadingButtonComponent } from './ngbit-base-loading-button.component';

@Component({
  selector: 'ngbit-dots-loading-button',
  template: `
    <button #btn [ngClass]="{ 'cursor': disabled }" [disabled]="disabled" (click)="onClick($event)"
    [class]="btnClass"  [type]="btnType"
     [style.width]="dimensions?.width + 'px'" [style.height]="dimensions?.height + 'px'">
<span *ngIf="!loader" class="text">
  <ng-content></ng-content>
</span>
      <ngbit-dots-indicator *ngIf="loader" height="100%" [speed]="speed"></ngbit-dots-indicator>
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
      .cursor {
        cursor: auto;
      }
    `
  ]
})
export class NgbitDotsLoadingButtonComponent extends NgbitBaseLoadingButtonComponent implements OnChanges {
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
