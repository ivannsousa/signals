import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TypedSignalComponent } from './typed-signal/typed-signal.component';
import { SetMethodComponent } from './set-method/set-method.component';
import { UpdateMethodComponent } from './update-method/update-method.component';
import { SignalReactiveComponent } from './signal-reactive/signal-reactive.component';

export const routes: Routes = [
    { path: '', component: SignalReactiveComponent },
    { path: 'reatividade-com-signal', component: SignalReactiveComponent },
    { path: 'signals-tipados', component: TypedSignalComponent },
    { path: 'metodo-set', component: SetMethodComponent },
    { path: 'metodo-update', component: UpdateMethodComponent }
];
