import { Component, inject, Input} from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  ServiceProduct = inject(ProductService);
  router = inject(Router);

  @Input() myProduct: IProduct;

  constructor(){
    this.myProduct = {
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
      active: true,
      id: "",
    }
  }

  deleteProduct(product: IProduct){
    this.ServiceProduct.deleteById(product.id);
  }

  editProduct(product: IProduct) {
    this.router.navigate(['/editproduct',product.id]);
  }
}
