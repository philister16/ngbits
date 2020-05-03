import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  show = false;
  menu = [
    {
      title: 'Getting started',
      route: '/getting-started'
    },
    {
      title: 'Flash',
      route: '/flash'
    },
    {
      title: 'Loading button',
      route: '/loading-button'
    },
    {
      title: 'Indicator button',
      route: '/indicator-button'
    },
    {
      title: 'Dropzone',
      route: '/dropzone'
    },
    {
      title: 'Indeterminate bar',
      route: '/indeterminate-bar'
    },
    {
      title: 'Pretty file input',
      route: '/pretty-file-input'
    }
  ];

}
