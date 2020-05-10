import { Component } from '@angular/core';
import { NgbitBlocknloadService, NgbitBlocknloadOptions } from 'projects/ngbits/src/public-api';
import { CustomTestComponent } from './custom-test.component';
import { CustomTestFullComponent } from './custom-test-full.component';

@Component({
  selector: 'app-blocknload',
  templateUrl: './blocknload.component.html',
  styleUrls: ['./blocknload.component.scss']
})
export class BlocknloadComponent {
  config = {
    message: 'Hang tight!',
    position: 'top' as 'top' | 'bottom',
    background: 'lightgrey',
    color: 'dodgerblue',
    height: '4px',
    bootstrap: null
  };
  api = [
    ['Method', 'Parameters', 'Description'],
    ['overlay(): NgbitOverlayBlocknloadComponent', 'component: Component, data?: object', 'Inserts a page overlay onto which a component can be displayed.'],
    ['bar(): NgbitBarBlocknloadComponent', 'options?: NgbitBlocknloadOptions', 'Inserts an indeterminate bar at the top or bottom of page.']
  ];
  interfaceApi = [
    ['Property', 'Default', 'Description'],
    ['position: \'top\' | \'bottom', '\'top\'', 'Position of the bar.'],
    ['backgroundColor: string', 'lightgrey', 'A CSS color string.'],
    ['color: string', 'dodgerblue', 'A css color string.'],
    ['height: string', '4px', 'A css height string. Determines the height of the bar.'],
    ['bsStyle: \'primary\' | \'secondary\' | \'info\' | \'danger\' | \'warning\' | \'success\'', '', 'Any of bootstrap\'s contextual classes to style the bar. This will override any other color settings.']
  ];

  constructor(private blocknload: NgbitBlocknloadService) { }

  bar() {
    const config: NgbitBlocknloadOptions = {
      position: this.config.position,
      backgroundColor: this.config.background,
      color: this.config.color,
      height: this.config.height,
      bsStyle: this.config.bootstrap
    };
    const instance = this.blocknload.bar(config);
    setTimeout(() => {
      instance.done();
    }, 3000);
  }

  overlay() {
    const instance = this.blocknload.overlay(CustomTestComponent, { message: this.config.message });
    setTimeout(() => {
      instance.done();
    }, 3000);
  }

  overlayFull() {
    const instance = this.blocknload.overlay(CustomTestFullComponent, { message: this.config.message });
    setTimeout(() => {
      instance.done();
    }, 3000);
  }

  get example() {
    return `
    // Component from where blocknload is triggered

    constructor(private blocknload: NgbitBlocknloadService) { }

    const data = {
      message: ${this.config.message}
    }

    // Here we pass a custom component that has a centered, fixed width template
    overlayWithMessage() {
      const instance = this.blocknload.overlay(OverlayCenterComponent, data);
      setTimeout(() => {
        instance.done();
      }, 3000);
    }

    // Here we pass a custom component that is full width and height
    fullscreenWithMessage() {
      this.blocknload.overlay(OverlayFullscreenComponent, data);
      setTimeout(() => {
        instance.done();
      }, 3000);
    }

    // Implementation of OverlayFullscreenComponent for illustration
    @Component({
      selector: 'overlay-fullscreen',
      template: \`
        <div class="wrapper">
          <div>
            <p>
              <ngbit-eclipse-indicator></ngbit-eclipse-indicator>
            </p>
            <p>{{ message }}</p>
          </div>
        </div>
        \`,
      styles: [\`
        .wrapper {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.8);
        }
      \`]
  })
  export class OverlayFullscreenComponent {
      message: string;
  }
    `;
  }

  get example2() {
    return `
    bar() {
      const config: NgbitBlocknloadOptions = {
        position: "${this.config.position}",
        backgroundColor: "${this.config.background}",
        color: "${this.config.color}",
        height: "${this.config.height}",
        bsStyle: "${this.config.bootstrap}"
      };
      const instance = this.blocknload.bar(config);
      setTimeout(() => {
        instance.done();
      }, 3000);
    }
      `;
  }

}
