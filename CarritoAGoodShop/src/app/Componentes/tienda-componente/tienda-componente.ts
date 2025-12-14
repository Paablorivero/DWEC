import { Component, inject } from '@angular/core';
import { ProductoComponente } from '../producto-componente/producto-componente';
import { ServicioProductos } from '../../Services/servicio-productos';
import { ServicioCarrito } from '../../Services/servicio-carrito';
import { IProducto } from '../../Interfaces/iproducto';
import { CarritoComponente } from '../carrito-componente/carrito-componente';

@Component({
  selector: 'app-tienda-componente',
  imports: [ProductoComponente, CarritoComponente],
  templateUrl: './tienda-componente.html',
  styleUrl: './tienda-componente.css',
})

export class TiendaComponente {

  //Injectamos los servicios para obtener tanto el array de productos  
  //como el carrito con los productos seleccionados
  ServicioProductos = inject(ServicioProductos);
  ServicioCarrito = inject(ServicioCarrito)
  
  //Definimos variables
  producto: IProducto;
  listaProductos : IProducto[];
  carrito : any[];
  precioTotal : number;

  
  constructor(){
    this.listaProductos = [];
    this.carrito = [];
    this.precioTotal = this.ServicioCarrito.getTotal();
    this.producto = {
      title : '',
      price : '',
      sku : '',
    };
  }

  //Al iniciar añadimos la lista de productos y el carrito de los servicios a los arrays del componente
  ngOnInit(): void{
      this.listaProductos = this.ServicioProductos.getAll();
      this.carrito = this.ServicioCarrito.getCompra();
  }

  vaciarCarrito(): void {
    this.ServicioCarrito.deleteCarrito();
    this.carrito = this.ServicioCarrito.carrito;
  }
}

