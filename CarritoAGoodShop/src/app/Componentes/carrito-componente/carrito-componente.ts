import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito-componente',
  imports: [],
  templateUrl: './carrito-componente.html',
  styleUrl: './carrito-componente.css',
})
export class CarritoComponente {

  //Creamos un input para recibir los datos del carrito desde el componente padre
  @Input() miCompra: any;

  //definimos el elemento con valores por defecto
  constructor(){
    this.miCompra = {
      sku : '',
      title : '',
      price : '',
      cantidad: ''
    }
  }
}
