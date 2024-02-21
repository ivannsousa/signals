import { Component, OnInit, inject, signal } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
    selector: 'set-method',
    standalone: true,
    imports: [],
    template: `
        <h4>Método set()</h4>
        <p>
            Os melhores carros populares 2024: {{ carsCollection() }}
        </p>
    `,
})
export class SetMethodComponent implements OnInit{
    carsService = inject(CarsService)
    carsCollection = signal<string[]>([])
    
    ngOnInit() {
        this.carsService.getAll().subscribe(
            cars => this.carsCollection.set(cars))
    }
}