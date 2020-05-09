import { ComponentRef } from '@angular/core';
import { NgbitBarBlocknloadComponent } from './ngbit-bar-blocknload/ngbit-bar-blocknload.component';
import { NgbitFullscreenBlocknloadComponent } from './ngbit-fullscreen-blocknload/ngbit-fullscreen-blocknload.component';

export interface NgbitBlocknloadOptions {
    // General
    color?: string;
    self$?: ComponentRef<NgbitFullscreenBlocknloadComponent | NgbitBarBlocknloadComponent>;

    // fullscreen
    fontSize?: string;
    spinner?: boolean;
    backgroundColor?: string;
    spinnerSpeed?: 'slow' | 'medium' | 'fast';
    spinnerHeight?: string;
    chaptersInterval?: number;

    // bar
    position?: 'top' | 'bottom';
    background?: string;
    height?: string;
    bsStyle?: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success';
}
