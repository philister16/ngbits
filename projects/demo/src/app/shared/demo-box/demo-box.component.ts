import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-demo-box',
  templateUrl: './demo-box.component.html',
  styleUrls: ['./demo-box.component.scss']
})
export class DemoBoxComponent {
  @Input() example: TemplateRef<any>;
  @Input() api: TemplateRef<any>;
  showExample = true;
}
