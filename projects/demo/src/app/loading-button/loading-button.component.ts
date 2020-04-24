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
    loaderColor: '#fff'
  };
  barsLoader = false;
  ringsLoader = false;
  gridLoader = false;
  api = [
    ['Input', 'Default', 'Description'],
    ['loader: boolean', 'false', 'Shows loader if true.'],
    ['btnClass: string', '', 'A string of CSS classes to style the button.'],
    ['btnType: "button" | "submit"', 'button', 'If the button is a submit type or not.'],
    ['loaderColor: string', '#fff', 'The color of the loader indicator as a hex color value.']
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
      loaderColor="${this.config.loaderColor}"
      (click)="handleClick()">
        Click to load
    </ngbit-dots-loading-button>
    `;
  }

  get example2() {
    return `
    <ngbit-bars-loading-button btnClass="btn btn-primary" [loader]="barsLoader" (click)="barsHandler()">
      Load with bars
    </ngbit-bars-loading-button>

    <ngbit-rings-loading-button btnClass="btn btn-primary" [loader]="ringsLoader" (click)="ringsHandler()">
      Load with rings
    </ngbit-rings-loading-button>

    <ngbit-grid-loading-button btnClass="btn btn-primary" [loader]="gridLoader" (click)="gridHandler()">
      Load with grid
    </ngbit-grid-loading-button>
    `;
  }

}
