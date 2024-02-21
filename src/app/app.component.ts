import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    styles: `
        .container {
            margin: 16px auto;
            width: 80%;
            padding: 16px;
        }
        .center { text-align: center; }
        .mt-64 { margin-top: 64px; }
    `,
    template: `
        <div class="container">
            <h1 class="center">Bem-vindos aos exemplos do artigo</h1>
            <h2 class="center"><a href="">Entendendo Signals no Angular 17 - Parte 1</a></h2>
            <ul>
                @for (item of urls(); track $index) {
                    <li>
                        {{ '#' + $index }} <a [href]="item.url">{{ item.name }}</a>
                    </li>
                }
            </ul>
            <div class="mt-64">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent {
    urls = signal<{ url: string, name: string }[]>(
        [
            { url: 'reatividade-com-signal', name: 'Reatividade com Signals' },
            { url: 'signals-tipados', name: 'Signals tipados' },  
            { url: 'metodo-set', name: 'Método set()' }, 
            { url: 'metodo-update', name: 'Método update()' }
        ]
    )
}


