import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'lib-ngbit-pretty-file-input',
    template: `
        <div class="wrapper" (click)="fileInput.click()">
            <ng-content></ng-content>
            <input #fileInput type="file" hidden [multiple]="multiple" (change)="onChoose($event)">
        </div>
    `,
    styles: [`
        .wrapper {
            display: inline-block;
        }
    `]
})
export class NgbitPrettyFileInputComponent {
    @Input() multiple = false;
    @Output() files = new EventEmitter<FileList>();

    onChoose(evt) {
        this.files.emit(evt.target.files);
    }

}
