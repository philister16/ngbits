import { Component } from '@angular/core';

@Component({
  selector: 'app-indicator-button',
  templateUrl: './indicator-button.component.html',
  styleUrls: ['./indicator-button.component.scss']
})
export class IndicatorButtonComponent {
  notch = false;
  eclipse = false;
  bottle = false;
  arrow = false;
  pulse = false;
  disk = false;
  circle = false;
  config = {
    loader: false,
    position: 'start',
    btnClass: 'btn btn-primary',
    btnType: 'button',
    speed: 'medium'
  };
  api = [
    ['Input', 'Default', 'Description'],
    ['loader: boolean', 'false', 'Shows the loading indicator when true.'],
    ['position: "start | "end', 'start', 'Whether to show the loading indicator before or after the button text.'],
    ['btnType: "button | "submit"', 'button', 'The type of the button.'],
    ['speed: "fast" | "medium" | "slow"', 'medium', 'Speed of the animation of the loading indicator.'],
    ['btnClass: string', '', 'One or more css classes to style the button.']
  ];

  get example() {
    return `
    <ngbit-notch-indicator-button
      loader="${this.config.loader}"
      position="${this.config.position}"
      btnType="${this.config.btnType}"
      speed="${this.config.speed}"
      btnClass="${this.config.btnClass}"
      (click)="handelClick()">
      Notch indicator button
    </ngbit-notch-indicator-button>
    `;
  }

  get example2() {
    return `
    <ngbit-eclipse-indicator-button [loader]="notch" btnClass="btn btn-primary mr-2" (click)="notch = !notch">
        Notch button
    </ngbit-eclipse-indicator-button>

    <ngbit-eclipse-indicator-button [loader]="eclipse" btnClass="btn btn-primary mr-2"
        (click)="eclipse = !eclipse">Eclipse button
    </ngbit-eclipse-indicator-button>

    <ngbit-bottle-indicator-button [loader]="bottle" btnClass="btn btn-primary mr-2" (click)="bottle = !bottle">
        Bottle button
    </ngbit-bottle-indicator-button>

    <ngbit-arrow-indicator-button [loader]="arrow" btnClass="btn btn-primary mr-2" (click)="arrow = !arrow">
        Arrow button
    </ngbit-arrow-indicator-button>

    <ngbit-pulse-indicator-button [loader]="pulse" btnClass="btn btn-primary mr-2" (click)="pulse = !pulse">
        Pulse button
    </ngbit-pulse-indicator-button>

    <ngbit-disk-indicator-button [loader]="disk" btnClass="btn btn-primary mr-2" (click)="disk = !disk">
        Disk button
    </ngbit-disk-indicator-button>

    <ngbit-circle-indicator-button [loader]="circle" btnClass="btn btn-primary mr-2" (click)="circle = !circle">
        Circle button
    </ngbit-circle-indicator-button>
    `;
  }

}
