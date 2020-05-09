import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pretty-file-input',
  templateUrl: './pretty-file-input.component.html',
  styleUrls: ['./pretty-file-input.component.scss']
})
export class PrettyFileInputComponent implements OnInit {
  files: FileList;
  multiple = true;
  apiA = [
    ['Input', 'Default', 'Description'],
    ['multiple: boolean', 'true', 'If true lets user select more than 1 file at the same time.']
  ];
  apiB = [
    ['Output', 'Description'],
    ['files: FileList', 'Fires an event containing the list of the selected files.']
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onFiles(files: FileList) {
    this.files = files;
  }

  get example() {
    return `
    <ngbit-pretty-file-input [multiple]="${this.multiple}" (files)="renderFileList($event)">
      <button class="btn btn-primary">Choose file</button>
    </ngbit-pretty-file-input>
    `;
  }

  get example2() {
    return `
    <p>
      You can place any markup to the component. Here for example just a simple link:
      <ngbit-pretty-file-input>
          <a class="link" href="#">Chose a file</a>
      </ngbit-pretty-file-input>
    </p>
    `;
  }

}
