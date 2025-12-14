import { Component, Input, inject} from '@angular/core';
import { IProducto } from '../../Interfaces/iproducto';
import { ServicioCarrito } from '../../Services/servicio-carrito';

@Component({
  selector: 'app-producto-componente',
  imports: [],
  templateUrl: './producto-componente.html',
  styleUrl: './producto-componente.css',
})

export class ProductoComponente {

  //Injectamos el servicio
  ServicioCarrito = inject(ServicioCarrito);

  //Hacemos un input para recibir los productos del componente padre tienda-componente
  @Input() miProducto: IProducto;

  cantidad! : number;

  constructor(){
    this.miProducto = {
      sku : '',
      title : '',
      price : ''
    }

  }

  ngOnInit(): void {
    this.cantidad = this.ServicioCarrito.getCantidadInicio();
  }

  //Metodo para añadir un producto
  sumarCantidad() {

    this.cantidad++;

    //Nos aseguramos que no hay mas de 99 (Es ejemplo, se puede cambiar por un numero mayor)
    if(this.cantidad < 99){

      //Sumamos 1 a la variable cantidad

      //creamos un elemento con los datos del producto ademas de la cantidad
      let productoCarrito = {
        sku: this.miProducto.sku,
        title: this.miProducto.title,
        price: Number(this.miProducto.price),
        cantidad: this.cantidad
      };

      //Insertamos el producto en el array de carrito con el metodo del servicio
      //Nos permite añadirlo porque el array es de tipo any
      this.ServicioCarrito.addProducto(productoCarrito);

      //Si la cantidad es 99 no permite añadir mas productos y salta una alerta
    }else(alert('No se pueden comprar mas productos'));
  } 

  //Metodo para eliminar producto
  restarCantidad() {

    
    //Nos aseguramos que minimo tengamos 1 producto
    if(this.cantidad > 0){

      //restamos 1 a la cantidad del producto
      this.cantidad--;

      //creamos un elemento con los datos del producto y la cantidad
      let productoCarrito = {
      sku: this.miProducto.sku,
      title: this.miProducto.title,
      price: Number(this.miProducto.price),
      cantidad: this.cantidad
    };

    //llamamos al metodo del servicio que actualiza la cantidad del producto del array carrito
    this.ServicioCarrito.removeProducto(productoCarrito);
    }
  }
}
