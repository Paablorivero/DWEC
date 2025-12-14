import { Routes } from '@angular/router';
import { Products } from './Pages/products/products';
import { Home } from './Pages/home/home';
import { ProductForm } from './Pages/product-form/product-form';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: Home},
    {path: 'product', component: Products},
    {path: 'addproduct', component: ProductForm},
    {path: 'editproduct/:id', component:ProductForm},

    {path: '**', component: Home}
];
