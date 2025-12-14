import { Injectable } from '@angular/core';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})

export class ServicioProductos {
  
  //Creamos una variable currency y un array de tipo Iproducto
  currency:string;
  productosArray:IProducto[];

  //En el constructor cargamos los elementos de la api y añadimos los productos al array creado
  constructor(){
    this.currency = "";
    this.productosArray = [];

    fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(data => {
      this.currency = data.currency;
      data.products.forEach((producto: IProducto) => {
        this.productosArray.push(producto);
      });
    });
  }

  //Con el array creado hacemos un metodo para acceder al array desde componentes
  getAll(): IProducto[]{
    return this.productosArray;
  }

  // fetch("https://peticiones.online/api/series")
  //           .then(response => response.json())
  //           .then(datos => {
  //               datos.forEach((element: any) => {
  //                   let serie = element as Iserie;
  //                   this.arrSeries.push(serie);
  //               });
  //           });
}
