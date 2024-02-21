import { Component, signal } from '@angular/core';

@Component({
    selector: 'update-method',
    standalone: true,
    imports: [],
    template: `
        <h4>Método update()</h4>
        <p>
            Man, você já clicou 
            <button (click)="onIncrement()">                                    
                {{ clickCounter() }} vezes
            </button> 
            nesse botão 🤨... precisa de ajuda?
        </p>
    `,
})
export class UpdateMethodComponent {
    clickCounter = signal(0)
    
    onIncrement() {
        this.clickCounter.update(val => val + 1)
    }
}