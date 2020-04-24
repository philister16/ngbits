import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  usageInstructions = `
    import { NgbitFlashModule } from 'ngbits';

    @NgModule({
      // ... module declarations etc.
      imports: [
        NgbitFlashModule
      ],
      // ... rest of module
    })
    export class AppModule { }
  `;

  bootstrapInstructions = `
    // styles.scss
    @import '~bootstrap/scss/bootstrap';
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
