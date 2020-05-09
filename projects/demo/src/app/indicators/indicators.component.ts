import { Component } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent {
  config = {
    color: 'currentColor',
    height: '1em',
    speed: 'medium'
  };
  api = [
    ['Input', 'Default', 'Description'],
    ['color: string', 'currentColor', 'The indicator\'s color. The \'currentColor\' variable sets it to whatever color it can match from its parents.'],
    ['height: string', '1em', 'The indicator\'s height. All indicators preserve their aspect ratio, so it is sufficient to only set a a height and the width will be determined.'],
    ['speed: "slow" | "medium" | "fast"', 'medium', 'The speed of the indicator animiation. Can be set to either \'slow\', \'medium\' or \'fast\'.']
  ];

  get example() {
    return `
    <ngbit-notch-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-notch-indicator>
    <ngbit-eclipse-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-eclipse-indicator>
    <ngbit-bottle-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-bottle-indicator>
    <ngbit-arrow-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-arrow-indicator>
    <ngbit-pulse-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-pulse-indicator>
    <ngbit-circle-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-circle-indicator>
    <ngbit-ripple-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-ripple-indicator>
    <ngbit-cube-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-cube-indicator>
    <ngbit-dots-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-dots-indicator>
    <ngbit-grid-indicator color="${this.config.color}" height="${this.config.height}" speed="${this.config.speed}"></ngbit-grid-indicator>
    `;
  }

}
