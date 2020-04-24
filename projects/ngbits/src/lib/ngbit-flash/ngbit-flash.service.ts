import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
} from '@angular/core';

import { NgbitFlashModule } from './ngbit-flash.module';
import { NgbitFlashComponent } from './ngbit-flash.componen';
import { NgbitFlashConfig } from './ngbit-flash-config.interface';
import { NgbitFlashRef } from './ngbit-flash-ref';

@Injectable({
  providedIn: NgbitFlashModule
})
export class NgbitFlashService {
  private flashComponentRef: NgbitFlashRef;
  private timer: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  private appendFlashToBody(message: string, init: NgbitFlashConfig) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgbitFlashComponent);
    const componentRef: NgbitFlashRef = componentFactory.create(this.injector);
    componentRef.instance.message = message;
    componentRef.instance.config = init;
    componentRef.instance.dismiss = this.close;
    componentRef.instance.$self = componentRef;
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.flashComponentRef = componentRef;
  }

  private removeFlashFromBody() {
    this.appRef.detachView(this.flashComponentRef.hostView);
    this.flashComponentRef.destroy();
  }

  private open(message: string, config?: NgbitFlashConfig): NgbitFlashRef {
    const init = this.setInitClass('ngbit-flash-default', config);
    this.appendFlashToBody(message, init);
    if (init.delay !== 'none') {
      this.timer = setTimeout(() => {
        this.removeFlashFromBody();
      }, init.delay || 3000);
    }
    return this.flashComponentRef;
  }

  private setInitClass(className: string, config): NgbitFlashConfig {
    let init: NgbitFlashConfig = { className };
    if (config) {
      init = { ...init, ...config };
    }
    return init;
  }

  /**
   * Flashes a custom styled message to the user
   * @param message A message to be displayed to the user
   * @param config A `NgbitFlashConfig` object
   */
  public custom(message: string, config?: NgbitFlashConfig): NgbitFlashRef {
    return this.open(message, config);
  }

  /**
   * Flashes a success message.
   * @param message A message to be displayed to the user.
   * @param config A FlashConfig object
   */
  public success(message: string, config?: NgbitFlashConfig): NgbitFlashRef {
    const init = this.setInitClass('alert alert-success', config);
    return this.open(message, init);
  }

  /**
   * Flashes an error message.
   * @param message A message to be displayed to the user.
   * @param config A FlashConfig object
   */
  public danger(message: string, config?: NgbitFlashConfig): NgbitFlashRef {
    const init = this.setInitClass('alert alert-danger', config);
    return this.open(message, init);
  }

  /**
   * Flashes a warning message.
   * @param message A message to be displayed to the user.
   * @param config A `FlashConfig` object.
   */
  public warning(message: string, config?: NgbitFlashConfig): NgbitFlashRef {
    const init = this.setInitClass('alert alert-warning', config);
    return this.open(message, init);
  }

  /**
   * Flashes a generic info message.
   * @param message A message to be displayed to the user.
   * @param config A `FlashConfig` object.
   */
  public info(message: string, config?: NgbitFlashConfig): NgbitFlashRef {
    const init = this.setInitClass('alert alert-info', config);
    return this.open(message, init);
  }

  /**
   * Closes an open flash message.
   */
  public close(): void {
    clearTimeout(this.timer);
  }
}

