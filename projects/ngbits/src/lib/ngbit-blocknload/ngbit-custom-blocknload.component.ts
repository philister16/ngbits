import {
    Component,
    ComponentFactory,
    ViewChild,
    ViewContainerRef,
    ChangeDetectorRef,
    AfterViewInit,
    ComponentRef,
    ApplicationRef
} from '@angular/core';

@Component({
    selector: 'ngbit-custom-blocknload',
    template: `
    <div class="wrapper">
        <ng-template #custom></ng-template>
    </div>
    `,
    styles: [`
        .wrapper {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 10000;
            /* display: flex;
            justify-content: center;
            align-items: center;
            text-align: center; */
        }
    `]
})
export class NgbitCustomBlocknloadComponent implements AfterViewInit {
    factory: ComponentFactory<any>;
    data;
    self$: ComponentRef<NgbitCustomBlocknloadComponent>;
    @ViewChild('custom', { read: ViewContainerRef }) custom: ViewContainerRef;

    constructor(private changes: ChangeDetectorRef, private appRef: ApplicationRef) { }

    ngAfterViewInit() {
        const ref = this.custom.createComponent(this.factory);
        for (const key in this.data) {
            if (this.data.hasOwnProperty(key)) {
                ref.instance[key] = this.data[key];
            }
        }
        this.changes.detectChanges();
    }

    done() {
        this.appRef.detachView(this.self$.hostView);
        this.self$.destroy();
    }
}
