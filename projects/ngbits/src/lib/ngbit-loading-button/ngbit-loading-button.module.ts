import { NgModule } from '@angular/core';
import { NgbitDotsLoadingButtonComponent } from './ngbit-dots-loading-button.component';
import { NgbitBarsLoadingButtonComponent } from './ngbit-bars-loading-button.component';
import { CommonModule } from '@angular/common';
import { NgbitRingsLoadingButtonComponent } from './ngbit-rings-loading-button.component';
import { NgbitGridLoadingButtonComponent } from './ngbit-grid-loading-button.component';

@NgModule({
    declarations: [
        NgbitDotsLoadingButtonComponent,
        NgbitBarsLoadingButtonComponent,
        NgbitRingsLoadingButtonComponent,
        NgbitGridLoadingButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NgbitDotsLoadingButtonComponent,
        NgbitBarsLoadingButtonComponent,
        NgbitRingsLoadingButtonComponent,
        NgbitGridLoadingButtonComponent
    ]
})
export class NgbitLoadingButtonModule { }
