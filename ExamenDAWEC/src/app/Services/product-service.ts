import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private arrayProductos: IProduct[];

  constructor(){
    this.arrayProductos = [];
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(datos => {
        datos.forEach((product: IProduct) => {
          this.arrayProductos.push(product);
        });
      });
  }

  getAll(): IProduct[]{
    return this.arrayProductos;
  }

  getProductById(id: string): IProduct | undefined{
    return this.arrayProductos.find(p => p.id === id)
  }

  deleteById(id: string){
    let i = this.arrayProductos.findIndex(p => p.id === id);
    if(i != -1 && i >= 0 && i < this.arrayProductos.length){
      this.arrayProductos.splice(i, 1);
    }
  }

  insertProduct(product: IProduct): void{
    if(!this.arrayProductos.includes(product) && product != null){
      product.id = uuidv4();
      product.active = true;
      this.arrayProductos.push(product);
    }
  }

  editProduct(product: IProduct): void{
    let i = this.arrayProductos.findIndex(p => p.id === product.id);

    if(i != -1 ){
      this.arrayProductos.splice(i, 1);
    }

    this.arrayProductos.push(product);
  }

  getProductByCategory(name: string, category: string, price: number){
    return this.arrayProductos.filter(p =>
      p.category.includes(category) && p.price >= price
      && p.name.includes(name)
    );
  }

}
