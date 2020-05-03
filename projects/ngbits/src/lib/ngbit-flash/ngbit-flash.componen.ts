import { Component, ApplicationRef, HostListener, ComponentRef, OnInit } from '@angular/core';
import { NgbitFlashConfig } from './ngbit-flash-config.interface';
import { trigger, transition, style, animate } from '@angular/animations';

interface NgbitFlashInit {
  xy: string;
  centered: boolean;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

@Component({
  selector: 'ngbit-flash',
  template: `
    <div [@fadeInOut] class="ngbit-flash {{ config.className }}" [ngStyle]="{
      top: init?.top,
      bottom: init?.bottom,
      right: init?.right,
      left: init?.left
    }"
    [ngClass]="{ 'ngbit-horizontal-center': init?.centered }"
    role="alert">
      {{ message }}
    </div>
  `,
  styles: [`
    .ngbit-flash {
      position: fixed;
      max-width: 360px;
      z-index: 10000;
      cursor: default;
    }

    .ngbit-flash-default {
      background-color: lightgrey;
      padding: 16px;
    }

    .ngbit-horizontal-center {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    }
  `],
  animations: [
    trigger(
      'fadeInOut',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.2s ease-out',
              style({ opacity: 1 }))
          ]
        )
      ]
    )
  ]
})
export class NgbitFlashComponent implements OnInit {
  message: string;
  type: string;
  config: NgbitFlashConfig;
  dismiss: any;
  $self: ComponentRef<NgbitFlashComponent>;
  init: NgbitFlashInit = { xy: '32px', centered: false };

  constructor(private appref: ApplicationRef) { }

  ngOnInit() {
    // Distance from browser edge
    if (this.config.offset) {
      this.init.xy = this.config.offset;
    }

    // Position top or bottom, top as default when vertical is undefined
    if (this.config.vertical === 'bottom') {
      this.init.bottom = this.init.xy;
    } else {
      this.init.top = this.init.xy;
    }

    // Position left, center or right
    if (this.config.horizontal === 'center') {
      this.init.centered = true;
    } else if (this.config.horizontal === 'left') {
      this.init.left = this.init.xy;
    } else {
      this.init.right = this.init.xy;
    }
  }

  @HostListener('click') remove() {
    this.appref.detachView(this.$self.hostView);
    this.$self.destroy();
  }

}
