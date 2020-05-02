import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indeterminate-bar',
  templateUrl: './indeterminate-bar.component.html',
  styleUrls: ['./indeterminate-bar.component.scss']
})
export class IndeterminateBarComponent implements OnInit {
  config = {
    background: 'lightgrey',
    color: 'dodgerblue',
    indeterminate: true,
    progress: 50,
    height: '4px',
    bsStyle: null
  };
  api = [
    ['Input', 'Default', 'Description'],
    ['background', 'lightgrey', 'The background color of the bar.'],
    ['color', 'dodgerblue', 'The color of the progress and indeterminate highlight.'],
    ['indeterminate', 'true', 'If the bar should behave indeterminately.'],
    ['progress', '50', 'If indeterminate is false then this is used to set the progress.'],
    ['height', '4px', 'A css height.'],
    ['bsStyle', 'null', 'A contextual bootstrap css class, any of primary, secondary, info, success, warning and danger.']
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get example() {
    return `
    <ngbit-indeterminate-bar
      background="${this.config.background}"
      color="${this.config.color}"
      indeterminate="${this.config.indeterminate}"
      progress="${this.config.progress}"
      height="${this.config.height}"
      bsStyle="${this.config.bsStyle}">
    <ngbit-indeterminate-bar>
    `;
  }

}
