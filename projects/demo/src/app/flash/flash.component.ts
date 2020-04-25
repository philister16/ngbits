import { Component } from '@angular/core';
import { NgbitFlashConfig } from 'projects/ngbits/src/public-api';
import { NgbitFlashService } from 'projects/ngbits/src/public-api';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.scss']
})
export class FlashComponent {
  flashConfig: NgbitFlashConfig = {
    vertical: 'top',
    horizontal: 'right',
    delay: 3000,
    offset: '32px',
    className: 'ngbit-flash-default'
  };
  serviceAPI = [
    ['Method', 'Parameters', 'Description'],
    ['custom()', 'message: string, config?: NgbitFlashConfig', 'Launches a flash message.'],
    ['success()', 'message: string, config?: NgbitFlashConfig', 'Launches a contextually styled success flash message.'],
    ['danger()', 'message: string, config?: NgbitFlashConfig', 'Launches a contextually styled error flash message.'],
    ['warning()', 'message: string, config?: NgbitFlashConfig', 'Launches a contextually styled warning flash message.'],
    ['info()', 'message: string, config?: NgbitFlashConfig', 'Launches a contextually styled info flash message.']
  ];
  configAPI = [
    ['Property', 'Default', 'Description'],
    ['vertical: "top" | "bottom"', 'top', 'Vertical position of flash.'],
    ['horizontal: "left", "right", "center"', 'right', 'Horizontal position of flash.'],
    ['delay: number', 3000, 'How long until the flash disappears in ms.'],
    ['offset: string', '32px', 'The margin from edge of viewport.'],
    ['className: string', 'ngbit-default-flash', 'CSS classes to style the flash. ' +
      'The default value is different depending on which of the 5 methods is used.']
  ];

  constructor(private ngbitFlash: NgbitFlashService) { }

  launchFlash(type: string) {
    switch (type) {
      case 'custom':
        this.ngbitFlash.custom('Some message styled by custom css classes.', this.flashConfig);
        break;
      case 'success':
        this.ngbitFlash.success('A success message');
        break;
      case 'danger':
        this.ngbitFlash.danger('An error message.');
        break;
      case 'warning':
        this.ngbitFlash.warning('A warning message');
        break;
      case 'info':
        this.ngbitFlash.info('A simple info message.');
        break;
    }
  }

  get flashExample1() {
    return `
    import { NgbitFlashService, NgbitFlashConfig } from 'ngbits';

    constructor(private ngbitFlash: NgbitFlashService) {}

    const config: NgbitFlashConfig = {
    vertical: '${this.flashConfig.vertical}',
    horizontal: '${this.flashConfig.horizontal}',
    delay: ${this.flashConfig.delay},
    offset: '${this.flashConfig.offset}',
    className: '${this.flashConfig.className}'
    };

    this.ngbitFlash.custom('Some message styled by custom css classes.', config);
    `;
  }

  get flashExample2() {
    return `
    this.ngbitFlash.success('A success message');
    this.ngbitFlash.danger('An error message.');
    this.ngbitFlash.warning('A warning message');
    this.ngbitFlash.info('A simple info message.');
    `;
  }

}
