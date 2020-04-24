import { Component, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-ngbit-bars-loading-button',
  template: `
    <button #btn [class]="btnClass" [type]="btnType" [style.width]="dimensions?.width + 'px'" [style.height]="dimensions?.height + 'px'">
      <span *ngIf="!loader" class="text">
        <ng-content></ng-content>
      </span>
      <svg *ngIf="loader" viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" [attr.fill]="loaderColor">
        <rect y="10" width="15" height="120" rx="6">
            <animate attributeName="height"
                  begin="0.5s" dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                  repeatCount="indefinite" />
            <animate attributeName="y"
                  begin="0.5s" dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                  repeatCount="indefinite" />
        </rect>
        <rect x="30" y="10" width="15" height="120" rx="6">
            <animate attributeName="height"
                  begin="0.25s" dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                  repeatCount="indefinite" />
            <animate attributeName="y"
                  begin="0.25s" dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                  repeatCount="indefinite" />
        </rect>
        <rect x="60" width="15" height="140" rx="6">
            <animate attributeName="height"
                  begin="0s" dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                  repeatCount="indefinite" />
            <animate attributeName="y"
                  begin="0s" dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                  repeatCount="indefinite" />
        </rect>
        <rect x="90" y="10" width="15" height="120" rx="6">
            <animate attributeName="height"
                  begin="0.25s" dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                  repeatCount="indefinite" />
            <animate attributeName="y"
                  begin="0.25s" dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                  repeatCount="indefinite" />
        </rect>
        <rect x="120" y="10" width="15" height="120" rx="6">
            <animate attributeName="height"
                  begin="0.5s" dur="1s"
                  values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
                  repeatCount="indefinite" />
            <animate attributeName="y"
                  begin="0.5s" dur="1s"
                  values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
                  repeatCount="indefinite" />
        </rect>
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
export class NgbitBarsLoadingButtonComponent implements OnChanges {
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
