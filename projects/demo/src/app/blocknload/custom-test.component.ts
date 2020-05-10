import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-test',
    template: `
        <div class="wrapper text-center">
            <div class="inner bg-primary">
                <div>
                    <p>
                        <ngbit-eclipse-indicator></ngbit-eclipse-indicator>
                    </p>
                    <p>{{ message }}</p>
                </div>
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
            color: white;
        }
        .inner {
            width: 270px;
            height: 270px;
            border: 1px solid grey;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `]
})
export class CustomTestComponent {
    message: string;
}
