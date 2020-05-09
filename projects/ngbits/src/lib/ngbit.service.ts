import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NgbitService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    public getComponentRef(component): ComponentRef<any> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef: ComponentRef<any> = componentFactory.create(this.injector);
        return componentRef;
    }

    public appendToDOM(componentRef: ComponentRef<any>) {
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
    }

    public configureComponentInstance(componentRef: ComponentRef<any>, config): ComponentRef<any> {
        for (const key in config) {
            if (config.hasOwnProperty(key)) {
                componentRef.instance[key] = config[key];
            }
        }
        return componentRef;
    }

    public removeFromDOM(componentRef: ComponentRef<any>): void {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }

    public createComponentFactory(component) {
        return this.componentFactoryResolver.resolveComponentFactory(component);
    }

}
