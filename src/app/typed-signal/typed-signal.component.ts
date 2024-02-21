import { Component, WritableSignal, signal } from '@angular/core';

@Component({
    selector: 'typed-signal',
    standalone: true,
    imports: [],
    template: `
        <h4>Signals tipados</h4>
        <ul>
            <li>age = {{ age() }}</li>
            <li>name = {{ name() }}</li>
            <li>fruits = {{ fruits() }}</li>
            <li>cat = {{ catStringify }}</li>
        </ul>
    `,
})
export class TypedSignalComponent {
    age: WritableSignal<number> = signal<number>(27)
    name = signal<string>('Siena')
    fruits = signal<string[]>(['Mango', 'McIntosh', 'Pineapple', 'Cashew'])
    cat = signal<{ name: string, type: string, eyes: string }>(
    	{ 
          name: 'Vamp', 
          type: 'Black', 
          eyes: 'Blue' 
        }
    )
    
    catStringify = JSON.stringify(this.cat())
}