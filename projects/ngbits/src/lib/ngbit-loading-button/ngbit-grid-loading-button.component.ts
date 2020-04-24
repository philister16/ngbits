import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-ngbit-grid-loading-button',
  template: `
    <button #btn [class]="btnClass" [type]="btnType" [style.width]="dimensions?.width + 'px'" [style.height]="dimensions?.height + 'px'">
      <span *ngIf="!loader" class="text">
        <ng-content></ng-content>
      </span>
      <svg *ngIf="loader" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" [attr.fill]="loaderColor">
        <circle cx="12.5" cy="12.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="0s" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
            <animate attributeName="fill-opacity"
              begin="100ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="52.5" cy="12.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="300ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="52.5" cy="52.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="600ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="92.5" cy="12.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="800ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="92.5" cy="52.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="400ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="12.5" cy="92.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="700ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="52.5" cy="92.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="500ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
        <circle cx="92.5" cy="92.5" r="12.5">
            <animate attributeName="fill-opacity"
              begin="200ms" dur="1s"
              values="1;.2;1" calcMode="linear"
              repeatCount="indefinite" />
        </circle>
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
        max-height: 60%;
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
export class NgbitGridLoadingButtonComponent implements OnChanges {
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
