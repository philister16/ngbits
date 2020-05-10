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
    selector: 'ngbit-overlay-blocknload',
    template: `

        <div class="wrapper fade-in">
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
        }

        .fade-in {
	        -webkit-animation: fade-in 0.25s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in 0.25s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        }

        @-webkit-keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    `]
})
export class NgbitOverlayBlocknloadComponent implements AfterViewInit {
    factory: ComponentFactory<any>;
    data;
    self$: ComponentRef<NgbitOverlayBlocknloadComponent>;
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
