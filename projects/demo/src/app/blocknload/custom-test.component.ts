import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-test',
    template: `
        <div class="wrapper">
            <p>Message: {{ message }}</p>
        </div>
    `,
    styles: [`
        .wrapper {
            background-color: skyblue;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `]
})
export class CustomTestComponent {
    message: string;
}
