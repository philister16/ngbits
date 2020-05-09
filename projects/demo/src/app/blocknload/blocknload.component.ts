import { Component, OnInit } from '@angular/core';
import { NgbitBlocknloadService, NgbitBlocknloadOptions } from 'projects/ngbits/src/public-api';
import { NgbitEclipseIndicatorComponent } from 'projects/ngbits/src/lib/ngbit-indicators/ngbit-eclipse-indicator.component';
import { CustomTestComponent } from './custom-test.component';

@Component({
  selector: 'app-blocknload',
  templateUrl: './blocknload.component.html',
  styleUrls: ['./blocknload.component.scss']
})
export class BlocknloadComponent implements OnInit {
  chapters = [
    '“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney',
    '“The Pessimist Sees Difficulty In Every Opportunity. ' +
    'The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill',
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers'
  ];

  constructor(private blocknload: NgbitBlocknloadService) { }

  ngOnInit(): void {
  }

  message() {
    const instance = this.blocknload.fullscreen('Hang tight!', NgbitEclipseIndicatorComponent);
    setTimeout(() => {
      instance.done();
    }, 3000);
  }

  bar() {
    const config: NgbitBlocknloadOptions = {
      bsStyle: 'info'
    };
    const instance = this.blocknload.bar(config);
    setTimeout(() => {
      instance.done();
    }, 3000);
  }

  custom() {
    const instance = this.blocknload.custom(CustomTestComponent);
    setTimeout(() => {
      instance.done();
    }, 3000);
  }

}
