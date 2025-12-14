
import { Component, inject } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product-service';
import { ProductCard } from "../../Components/product-card/product-card";
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ProductCard, RouterLink, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  arrayProducts: IProduct[];
  serviceProducts = inject(ProductService)
  product: any;
  name: string;
  category: string;
  price: number;


  constructor(){
    this.arrayProducts = [];
    this.name = "";
    this.category = "";
    this.price = 0;
  }

  ngOnInit(): void{
    this.arrayProducts = this.serviceProducts.getAll();
  }

  filtrarProducto(){
    this.arrayProducts = this.serviceProducts.getProductByCategory(this.name, this.category, this.price);
    if(this.arrayProducts.length == 0){
      alert("No hay productos con esas caracteristicas")
      this.name = "";
      this.category = "";
      this.price = 0;
      this.arrayProducts = this.serviceProducts.getProductByCategory(this.name, this.category, this.price);
    }
  }
}
