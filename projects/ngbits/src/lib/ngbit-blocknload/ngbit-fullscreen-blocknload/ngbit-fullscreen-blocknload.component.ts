import {
    Component,
    OnInit,
    ComponentRef,
    ApplicationRef,
    ViewChild,
    ViewContainerRef,
    AfterViewInit,
    ChangeDetectorRef,
    ComponentFactory,
} from '@angular/core';

@Component({
    selector: 'ngbit-fullscreen-blocknload',
    template: `
    <div class="wrapper fade-in" [style.background-color]="'rgba(' + backgroundColor + ')'">
        <span [ngStyle]="{ 'font-size': fontSize, 'color': color }">
            <ng-template #indicator></ng-template>
            <p class="px">{{ message }}</p>
            <p *ngIf="chapters" class="px">
                {{ chapter }}
            </p>
        </span>
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
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .px {
            padding: 0 6em;
        }

        @media only screen and (max-width: 767px) {
            .px {
                padding: 0 1em;
            }
        }


        svg {
            height: 1em;
        }

        .fade-in {
	        -webkit-animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
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
export class NgbitFullscreenBlocknloadComponent implements OnInit, AfterViewInit {
    message: string;
    chapters: string[];
    chapter: string;
    self$: ComponentRef<NgbitFullscreenBlocknloadComponent>;
    indicatorFactory: ComponentFactory<any>;
    @ViewChild('indicator', { read: ViewContainerRef }) indicator: ViewContainerRef;

    // The following are set via options
    fontSize = '2rem';
    spinner = true;
    color = 'inherit';
    backgroundColor = '255,255,255,0.5';
    spinnerSpeed = 'medium';
    spinnerHeight = '1em';
    duration: string;
    chaptersInterval = 3000;

    constructor(private appRef: ApplicationRef, private changes: ChangeDetectorRef) { }

    ngOnInit() {
        if (this.chapters) {
            this.tellStory();
        }
    }

    ngAfterViewInit() {
        const ref = this.indicator.createComponent(this.indicatorFactory);
        ref.instance.speed = this.spinnerSpeed;
        ref.instance.height = this.spinnerHeight;
        this.changes.detectChanges();
    }

    private tellStory() {
        const maxCount = this.chapters.length - 1;
        let counter = 0;
        const nextChapter = () => {
            this.chapter = this.chapters[counter];
            setTimeout(() => {
                counter < maxCount ? counter++ : counter = 0;
                nextChapter();
            }, this.chaptersInterval);
        };
        nextChapter();
    }

    done() {
        this.appRef.detachView(this.self$.hostView);
        this.self$.destroy();
    }
}
