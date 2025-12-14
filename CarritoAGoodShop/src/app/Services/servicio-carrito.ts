import { Injectable } from '@angular/core';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})

export class ServicioCarrito {
  
  //Creamos una variable producto y una carrito, esta para almacenar solo los productos que seleccionemos
  producto! : IProducto;
  carrito : any[];

  //creamos una variable para dar una cantidad inicial a los productos
  //tambien una que almacene el precio total de la compra
  private total : number;
  private cantidadInicio;
  actCantidad : number;

  constructor(){
    this.carrito = [];
    this.total = 0;
    this.cantidadInicio = 0;
    this.actCantidad = 0;
  }

  //Creamos un metodo para acceder a la cantidad de inicio desde el componente
  getCantidadInicio() : number{
    return this.cantidadInicio;
  }

  //Metodo para añadir un producto al array de carrito
  addProducto(producto: any) : void{

    //Buscamos un producto por el valor del sku
    let prod = this.carrito.findIndex((p) => p.sku === producto.sku);

    //Si encuentra el producto (!== -1) actualizamos la cantidad en el array de carrito
    //la cantidad se suma antes de acceder al metodo en el componente 
    if(prod !== -1){
      this.carrito[prod].cantidad = producto.cantidad;
    }else{//Si el valor de prod = -1 quiere decir que no esta en el array carrito
      this.carrito.push(producto);//como no se encuentra en el array lo añadimos
    }

    //actualizamos el valor total añadiendole el precio del producto añadido a la cesta.
    this.total += producto.price;

  }

  //Metodo para eliminar producto del array de carrito
  removeProducto(producto : any) : void {
    //Igual que el metodo anterior buscamos un producto por el sku
    let prod = this.carrito.findIndex((p) => p.sku === producto.sku);

    //si encuentra el producto actualizamos la cantidad restada en el componente y si es 0 eliminamos
    if(prod !== -1){
      this.carrito[prod].cantidad = producto.cantidad;
      if(this.carrito[prod].cantidad === 0){
        this.carrito.splice(prod, 1);//si la cantidad es 0 eliminamos el elemento del array (posicion, cantidad)
      }
    }
    this.total -= producto.price;//Actualizamos el total restando el precio del producto
  }

  //Metodo que devuelve el array de carrito para cargarlo en el componente
  getCompra() : any[]{
    return this.carrito;
  }

  //Metodo que devuelve el precio total del carrito
  getTotal() : number{
    return this.total;
  }

  deleteCarrito(): void {
    this.carrito = [];
    this.actCantidad = 0;
  }

  
  
}
