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
    ['background: string', 'lightgrey', 'The background color of the bar.'],
    ['color: string', 'dodgerblue', 'The color of the progress and indeterminate highlight.'],
    ['indeterminate: boolean', 'true', 'If the bar should behave indeterminately.'],
    ['progress: number', '50', 'If indeterminate is false then this is used to set the progress.'],
    ['height: string', '4px', 'A css height.'],
    ['bsStyle: \'primary\' | \'secondary\' | \'info\' | \'danger\' | \'warning\' | \'success\'', 'null', 'A contextual bootstrap css class, any of primary, secondary, info, success, warning and danger.']
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
