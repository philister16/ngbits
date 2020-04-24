import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.scss']
})
export class ApiTableComponent implements OnInit {
  @Input() tableValues: string[][] = [];
  headerRow: string[];

  ngOnInit(): void {
    this.headerRow = this.tableValues[0];
    this.tableValues.shift();
  }

}
