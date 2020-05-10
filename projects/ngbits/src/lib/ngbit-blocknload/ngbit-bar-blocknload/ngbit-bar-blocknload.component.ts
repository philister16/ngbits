import { Component, ApplicationRef, ComponentRef } from '@angular/core';

@Component({
    selector: 'ngbit-bar-blocknload',
    templateUrl: './ngbit-bar-blocknload.component.html',
    styleUrls: ['./ngbit-bar-blocknload.component.scss']
})
export class NgbitBarBlocknloadComponent {
    position: 'top' | 'bottom' = 'top';
    backgroundColor: string;
    color: string;
    height = '4px';
    bsStyle: 'primary' | 'secondary' | 'info' | 'danger' | 'warning' | 'success' = null;
    self$: ComponentRef<NgbitBarBlocknloadComponent>;

    constructor(private appRef: ApplicationRef) { }

    done() {
        this.appRef.detachView(this.self$.hostView);
        this.self$.destroy();
    }
}
