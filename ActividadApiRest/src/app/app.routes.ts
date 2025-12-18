import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Page404 } from './Pages/page404/page404';
import { NuevoUsuario } from './Pages/nuevo-usuario/nuevo-usuario';
import { InfoUsuario } from './Pages/info-usuario/info-usuario';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'newuser', component: NuevoUsuario},
    {path: 'user/:_id', component: InfoUsuario},

    {path: '**', component: Page404}
];
