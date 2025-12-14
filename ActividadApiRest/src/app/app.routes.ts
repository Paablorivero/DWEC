import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Page404 } from './Pages/page404/page404';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},

    {path: '**', component: Page404}
];
