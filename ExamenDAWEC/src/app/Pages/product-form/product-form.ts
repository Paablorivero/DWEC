import { ProductService } from './../../Services/product-service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IProduct } from '../../Interfaces/iproduct';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {

  productForm: FormGroup;
  ServiceProcuct = inject(ProductService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isNew: boolean;

  constructor(){
    this.isNew = true;
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null,[Validators.required]),
      price: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
    }, []);
  }

  getDataForm(){
    let product = this.productForm.value as IProduct;

    if(this.isNew){
      product.id = "-1";
      this.ServiceProcuct.insertProduct(product);
    }else{
      this.ServiceProcuct.editProduct(product);
    }
    
    this.productForm.reset();
    this.router.navigate(['product']);
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let id: string = params.id;
      if(id != undefined){
        let myProduct = this.ServiceProcuct.getProductById(id);
        if(myProduct != undefined){
          this.isNew = false;
          this.productForm = new FormGroup({
            name: new FormControl(myProduct.name, [Validators.required]),
            description: new FormControl(myProduct.description,[Validators.required]),
            price: new FormControl(myProduct.price, [Validators.required]),
            category: new FormControl(myProduct.category, [Validators.required]),
            image: new FormControl(myProduct.image, [Validators.required]),
            active: new FormControl(myProduct.active, []),
            id: new FormControl(myProduct.id, [])
          }, []);
        }
      }
    })
  }
}
