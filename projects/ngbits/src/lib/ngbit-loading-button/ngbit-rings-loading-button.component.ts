import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngbit-rings-loading-button',
  template: `
    <button #btn [class]="btnClass" [type]="btnType" [style.width]="dimensions?.width + 'px'" [style.height]="dimensions?.height + 'px'">
      <span *ngIf="!loader" class="text">
        <ng-content></ng-content>
      </span>
      <svg *ngIf="loader" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" [attr.stroke]="loaderColor">
          <g fill="none" fill-rule="evenodd" stroke-width="6">
              <circle cx="22" cy="22" r="1">
                  <animate attributeName="r"
                      begin="0s" dur="1.8s"
                      values="1; 20"
                      calcMode="spline"
                      keyTimes="0; 1"
                      keySplines="0.165, 0.84, 0.44, 1"
                      repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity"
                      begin="0s" dur="1.8s"
                      values="1; 0"
                      calcMode="spline"
                      keyTimes="0; 1"
                      keySplines="0.3, 0.61, 0.355, 1"
                      repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="22" r="1">
                  <animate attributeName="r"
                      begin="-0.9s" dur="1.8s"
                      values="1; 20"
                      calcMode="spline"
                      keyTimes="0; 1"
                      keySplines="0.165, 0.84, 0.44, 1"
                      repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity"
                      begin="-0.9s" dur="1.8s"
                      values="1; 0"
                      calcMode="spline"
                      keyTimes="0; 1"
                      keySplines="0.3, 0.61, 0.355, 1"
                      repeatCount="indefinite" />
              </circle>
          </g>
      </svg>
    </button>
  `,
  styles: [
    `
      button {
        position: relative;
      }

      svg {
        max-width: 66%;
        max-height: 70%;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
      }

      .text {
        white-space: nowrap;
      }
    `
  ]
})
export class NgbitRingsLoadingButtonComponent implements OnChanges {
  @ViewChild('btn') btn: ElementRef;
  @Input() loader = false;
  @Input() btnClass: string;
  @Input() btnType: 'button' | 'submit' = 'button';
  @Input() loaderColor = '#fff';
  dimensions: { width: number, height: number };

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.loader && changes.loader.currentValue) {
      const { offsetWidth, offsetHeight } = this.btn.nativeElement;
      this.dimensions = { width: offsetWidth, height: offsetHeight };
    }
  }

}
