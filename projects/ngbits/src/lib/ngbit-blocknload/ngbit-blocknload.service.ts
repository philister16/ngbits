import { Injectable } from '@angular/core';
import { NgbitService } from '../ngbit.service';
import { NgbitFullscreenBlocknloadComponent } from './ngbit-fullscreen-blocknload/ngbit-fullscreen-blocknload.component';
import { NgbitBarBlocknloadComponent } from './ngbit-bar-blocknload/ngbit-bar-blocknload.component';
import { NgbitBlocknloadOptions } from './ngbit-blocknload-options.interface';
import { NgbitCustomBlocknloadComponent } from './ngbit-custom-blocknload.component';

@Injectable({
    providedIn: 'root'
})
export class NgbitBlocknloadService {

    constructor(private ngbit: NgbitService) { }

    /**
     * Displays a full screen overlay with a loading indicato and messages
     * @param message A short message for the user what's happening, i.e. 'loading...'
     * @param indicator Any of `Ngbit[Variant]IndicatorComponent`
     * @param opts A configuration object
     * @param chapters An array of strings
     */
    fullscreen(
        message?: string,
        indicator?: any,
        opts: NgbitBlocknloadOptions = {},
        chapters?: string[]
    ): NgbitFullscreenBlocknloadComponent {
        let ref = this.ngbit.getComponentRef(NgbitFullscreenBlocknloadComponent);
        const indicatorFactory = this.ngbit.createComponentFactory(indicator);
        const config = { message, indicatorFactory, ...opts, chapters };
        config.self$ = ref;
        ref = this.ngbit.configureComponentInstance(ref, config);
        this.ngbit.appendToDOM(ref);
        return ref.instance;
    }

    /**
     * Displays a material style indeterminate bar at the top or bottom of viewport
     * @param opts A configuration object
     */
    bar(opts: NgbitBlocknloadOptions = {}): NgbitBarBlocknloadComponent {
        let ref = this.ngbit.getComponentRef(NgbitBarBlocknloadComponent);
        opts.self$ = ref;
        ref = this.ngbit.configureComponentInstance(ref, opts);
        this.ngbit.appendToDOM(ref);
        return ref.instance;
    }

    /**
     * A custom overlay consisting of a dynamically passed component
     * @param component Any Angular component
     * @param data An object with key values of data that you want to pass to the component
     */
    custom(component: any, data = {}): NgbitCustomBlocknloadComponent {
        let ref = this.ngbit.getComponentRef(NgbitCustomBlocknloadComponent);
        const factory = this.ngbit.createComponentFactory(component);
        const config = { factory, self$: ref, data };
        ref = this.ngbit.configureComponentInstance(ref, config);
        this.ngbit.appendToDOM(ref);
        return ref.instance;
    }
}
