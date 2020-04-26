import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  isHovering = false;
  droppedFiles: FileList;
  api = [
    ['Output', 'Description'],
    ['hovered: boolean', 'Emits true when a file is dragged over the host element.'],
    ['dropped: FileList', 'Emits an HTML FileList when files are dropped on the host element.']
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get example() {
    return `
    <div
      ngbitDropzone
      (hovered)="isHovering = $event"
      [ngClass]="{ 'bg-secondary': !isHovering, 'bg-primary': isHovering }"
      (dropped)="droppedFiles = $event">
      <p *ngIf="!droppedFiles">Drop a file here</p>
      <div *ngIf="droppedFiles">
          <p>You dropped the following files:</p>
          <ul>
              <li *ngFor="let file of droppedFiles | keyvalue">{{ file.value.name }}</li>
          </ul>
      </div>
    </div>
    `;
  }

}
