import { NgModule } from '@angular/core';
import { NgbitIndeterminateBarModule } from '../ngbit-indeterminate-bar/ngbit-indeterminate-bar.module';
import { NgbitBarBlocknloadComponent } from './ngbit-bar-blocknload/ngbit-bar-blocknload.component';
import { NgbitFullscreenBlocknloadComponent } from './ngbit-fullscreen-blocknload/ngbit-fullscreen-blocknload.component';
import { CommonModule } from '@angular/common';
import { NgbitCustomBlocknloadComponent } from './ngbit-custom-blocknload.component';

const assets = [
    NgbitBarBlocknloadComponent,
    NgbitFullscreenBlocknloadComponent,
    NgbitCustomBlocknloadComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgbitIndeterminateBarModule
    ],
    declarations: assets,
    entryComponents: assets,
    exports: assets
})
export class NgbitBlocknloadModule { }
