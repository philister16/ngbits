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
  cube = false;
  ripple = false;
  dots = false;
  grid = false;
  config = {
    loader: false,
    position: 'start',
    btnClass: 'btn btn-primary',
    btnType: 'button',
    speed: 'medium',
    disabled: false
  };
  api = [
    ['Input', 'Default', 'Description'],
    ['loader: boolean', 'false', 'Shows the loading indicator when true.'],
    ['position: "start | "end', 'start', 'Whether to show the loading indicator before or after the button text.'],
    ['btnType: "button | "submit"', 'button', 'The type of the button.'],
    ['speed: "fast" | "medium" | "slow"', 'medium', 'Speed of the animation of the loading indicator.'],
    ['btnClass: string', '', 'One or more css classes to style the button.'],
    ['disabled: boolean', 'false', 'Toggle disabled state of button.']
  ];

  api2 = [
    ['Output', 'Description'],
    ['btnClick: MouseEvent', 'A wrapper of the native click event on the button.']
  ];

  get example() {
    return `
    <ngbit-notch-indicator-button
      loader="${this.config.loader}"
      position="${this.config.position}"
      btnType="${this.config.btnType}"
      speed="${this.config.speed}"
      btnClass="${this.config.btnClass}"
      disabled="${this.config.disabled}"
      (btnClick)="handelClick()">
      Notch indicator button
    </ngbit-notch-indicator-button>
    `;
  }

  get example2() {
    return `
    <ngbit-eclipse-indicator-button [loader]="eclipse" btnClass="btn btn-primary mr-2 mb-2"
        (btnClick)="eclipse = !eclipse">
        Eclipse button
    </ngbit-eclipse-indicator-button>

    <ngbit-bottle-indicator-button [loader]="bottle" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="bottle = !bottle">
        Bottle button
    </ngbit-bottle-indicator-button>

    <ngbit-arrow-indicator-button [loader]="arrow" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="arrow = !arrow">
        Arrow button
    </ngbit-arrow-indicator-button>

    <ngbit-pulse-indicator-button [loader]="pulse" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="pulse = !pulse">
        Pulse button
    </ngbit-pulse-indicator-button>

    <ngbit-circle-indicator-button [loader]="circle" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="circle = !circle">
        Circle button
    </ngbit-circle-indicator-button>

    <ngbit-ripple-indicator-button [loader]="ripple" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="ripple = !ripple">
        Ripple button
    </ngbit-ripple-indicator-button>

    <ngbit-cube-indicator-button [loader]="cube" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="cube = !cube">
        Cube button
    </ngbit-cube-indicator-button>

    <ngbit-dots-indicator-button [loader]="dots" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="dots = !dots">
        Dots button
    </ngbit-dots-indicator-button>

    <ngbit-grid-indicator-button [loader]="grid" btnClass="btn btn-primary mr-2 mb-2" (btnClick)="grid = !grid">
        Grid button
    </ngbit-grid-indicator-button>
    `;
  }

}
