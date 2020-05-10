import { Injectable } from '@angular/core';
import { NgbitService } from '../ngbit.service';
import { NgbitBarBlocknloadComponent } from './ngbit-bar-blocknload/ngbit-bar-blocknload.component';
import { NgbitBlocknloadOptions } from './ngbit-blocknload-options.interface';
import { NgbitOverlayBlocknloadComponent } from './ngbit-overlay-blocknload.component';

@Injectable({
    providedIn: 'root'
})
export class NgbitBlocknloadService {

    constructor(private ngbit: NgbitService) { }

    /**
     * Displays a material style indeterminate bar at the top or bottom of viewport
     * @param opts A configuration object
     */
    bar(opts: NgbitBlocknloadOptions = {}): NgbitBarBlocknloadComponent {
        let ref = this.ngbit.getComponentRef(NgbitBarBlocknloadComponent);
        const config = { ...opts, self$: ref };
        ref = this.ngbit.configureComponentInstance(ref, config);
        this.ngbit.appendToDOM(ref);
        return ref.instance;
    }

    /**
     * A custom overlay consisting of a dynamically passed component
     * @param component Any Angular component
     * @param data *Optional* An object with key values of data that you want to pass to the component
     */
    overlay(component: any, data = {}): NgbitOverlayBlocknloadComponent {
        let ref = this.ngbit.getComponentRef(NgbitOverlayBlocknloadComponent);
        const factory = this.ngbit.createComponentFactory(component);
        const config = { factory, self$: ref, data };
        ref = this.ngbit.configureComponentInstance(ref, config);
        this.ngbit.appendToDOM(ref);
        return ref.instance;
    }
}
