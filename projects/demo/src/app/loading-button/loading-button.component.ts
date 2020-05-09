import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})
export class LoadingButtonComponent implements OnInit {
  config = {
    loader: false,
    btnClass: 'btn btn-primary',
    btnType: 'button',
    speed: 'medium'
  };
  notchLoader = false;
  eclipseLoader = false;
  bottleLoader = false;
  arrowLoader = false;
  pulseLoader = false;
  circleLoader = false;
  rippleLoader = false;
  cubeLoader = false;
  gridLoader = false;
  api = [
    ['Input', 'Default', 'Description'],
    ['loader: boolean', 'false', 'Shows loader if true.'],
    ['btnClass: string', '', 'A string of CSS classes to style the button.'],
    ['btnType: "button" | "submit"', 'button', 'If the button is a submit type or not.'],
    ['speed: "slow" | "medium" | "fast"', 'medium', 'The speed of the indicator animation.']
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get example() {
    return `
    // Use the button components in a component template
    <ngbit-dots-loading-button
      loader=${this.config.loader}
      btnClass="${this.config.btnClass}"
      btnType="${this.config.btnType}"
      speed="${this.config.speed}"
      (click)="handleClick()">
        Click to load
    </ngbit-dots-loading-button>
    `;
  }

  get example2() {
    return `
    <ngbit-notch-loading-button [loader]="notchLoader"
        (click)="notchLoader = !notchLoader">
        Notch loading
    </ngbit-notch-loading-button>
    <ngbit-eclipse-loading-button [loader]="eclipseLoader"
        (click)="eclipseLoader = !eclipseLoader">
        Eclipse loading
    </ngbit-eclipse-loading-button>
    <ngbit-bottle-loading-button [loader]="bottleLoader"
        (click)="bottleLoader = !bottleLoader">
        Bottle loading
    </ngbit-bottle-loading-button>
    <ngbit-arrow-loading-button [loader]="arrowLoader"
        (click)="arrowLoader = !arrowLoader">
        Arrow loading
    </ngbit-arrow-loading-button>
    <ngbit-pulse-loading-button [loader]="pulseLoader"
        (click)="pulseLoader = !pulseLoader">
        Pulse loading
    </ngbit-pulse-loading-button>
    <ngbit-circle-loading-button [loader]="circleLoader"
        (click)="circleLoader = !circleLoader">
        Circle loading
    </ngbit-circle-loading-button>
    <ngbit-ripple-loading-button [loader]="rippleLoader"
        (click)="rippleLoader = !rippleLoader">
        Ripple loading
    </ngbit-ripple-loading-button>
    <ngbit-cube-loading-button [loader]="cubeLoader"
        (click)="cubeLoader = !cubeLoader">
        Cube loading
    </ngbit-cube-loading-button>
    <ngbit-grid-loading-button [loader]="gridLoader"
        (click)="gridLoader = !gridLoader">
        Load with grid
    </ngbit-grid-loading-button>
    `;
  }

}
