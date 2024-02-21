import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule],
    template: `
        <input type="text" [(ngModel)]="name">
        <p>
            Olá, <strong>{{ name() }}</strong>! Bem-vindo(a) ao mundo da reativida com signals 😍
        </p>
    `
})
export class SignalReactiveComponent {
    name = signal('Anabanana')
}