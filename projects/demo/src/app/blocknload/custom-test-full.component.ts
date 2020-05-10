import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-test-full',
    template: `
        <div class="wrapper text-center">
            <div>
                <p>
                    <ngbit-eclipse-indicator></ngbit-eclipse-indicator>
                </p>
                <p>{{ message }}</p>
            </div>
        </div>
    `,
    styles: [`
        .wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            background-color: rgba(255, 255, 255, 0.8);
        }
    `]
})
export class CustomTestFullComponent {
    message: string;
}
