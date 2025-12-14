import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404/page404';
import { Shop } from './pages/shop/shop';
import { Libros } from './pages/libros/libros';
import { Peliculas } from './pages/peliculas/peliculas';
import { SaberMas } from './pages/saber-mas/saber-mas';
import { PeliculaInfo } from './pages/pelicula-info/pelicula-info';
import { PeliculaForm } from './pages/pelicula-form/pelicula-form';
import { LibroInfo } from './pages/libro-info/libro-info';
import { LibroForm } from './pages/libro-form/libro-form';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'libros', component: Libros},
    {path: 'peliculas', component: Peliculas},
    {path: 'sabermas', component:SaberMas},

    {path: 'pelicula/:id', component:PeliculaInfo},
    {path: 'nuevapelicula', component:PeliculaForm},
    {path: 'editarpelicula/:id', component: PeliculaForm},

    {path: 'libros/:id', component: LibroInfo},
    {path: 'nuevolibro', component: LibroForm},
    {path: 'editarlibro/:id', component: LibroForm},

    {path: 'shop', component: Shop,},
    
    

    {path: '**', component: Page404}
];
