import { Injectable } from '@angular/core';
import { delay, from, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor() { }

    getAll() {
        return of(['Kwid', 'Onix', 'Argo', 'Gol']).pipe(
            delay(5000)
        )
    }
}
