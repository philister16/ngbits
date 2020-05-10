import { NgModule } from '@angular/core';
import { NgbitIndeterminateBarModule } from '../ngbit-indeterminate-bar/ngbit-indeterminate-bar.module';
import { NgbitBarBlocknloadComponent } from './ngbit-bar-blocknload/ngbit-bar-blocknload.component';
import { CommonModule } from '@angular/common';
import { NgbitOverlayBlocknloadComponent } from './ngbit-overlay-blocknload.component';
import { NgbitIndicatorsModule } from '../ngbit-indicators/ngbit-indicators.module';

const assets = [
    NgbitBarBlocknloadComponent,
    NgbitOverlayBlocknloadComponent
];

@NgModule({
    imports: [
        CommonModule,
        NgbitIndicatorsModule,
        NgbitIndeterminateBarModule
    ],
    declarations: assets,
    entryComponents: assets,
    exports: assets
})
export class NgbitBlocknloadModule { }
