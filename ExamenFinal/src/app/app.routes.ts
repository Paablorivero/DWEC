import { Routes } from '@angular/router';
import { LandinPage } from './Pages/landin-page/landin-page';
import { Login } from './Pages/login/login';
import { Dashboard } from './Components/dashboard/dashboard';
import { loginGuard } from './Guardas/login-guard';
import { HeroList } from './Pages/hero-list/hero-list';
import { HeroInfo } from './Pages/hero-info/hero-info';
import { Page404 } from './Pages/page404/page404';
import { HeroForm } from './Pages/hero-form/hero-form';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: LandinPage},
    {path: 'login', component: Login},
    {path: 'dashboard', component: Dashboard, canActivate : [loginGuard], children:[
        {path: 'heroes', component: HeroList},
        {path: 'hero', component: HeroInfo},
        {path: 'updatehero/:id', component:HeroForm},
        {path: 'newhero', component:HeroForm},
    ]},
    {path: 'page404', component: Page404},

    {path: '**', component: Page404}
];
