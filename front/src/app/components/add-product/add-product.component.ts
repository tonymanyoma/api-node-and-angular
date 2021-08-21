import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup
  title = 'Create product'
  id: string;

  constructor(private fb: FormBuilder, 
    private productService: ProductService, 
    private router: Router, 
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute
    ) { 

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageURL: ['', Validators.required],
      price: ['', Validators.required],
    })

    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.isEdit();
  }

  createProduct(){
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      imageURL: this.productForm.get('imageURL')?.value,
      price: this.productForm.get('price')?.value
    }

    if(this.id !== null) {
      // editamos producto
      this._productService.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.info('El producto fue actualizado con éxito', 'Prodcto actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error)
        this.productForm.reset();
      })
    }else{
      // creamos el producto
      this._productService.createProduct(PRODUCT).subscribe(data => {
        this.toastr.success('El producto fue creado con éxito', 'Prodcto creado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error)
        this.productForm.reset();
      })
    }

   
  }

  isEdit(){
    if(this.id !== null){
      this.title = 'edit product';
      this._productService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          name: data.name,
          description: data.description,
          imageURL: data.imageURL,
          price: data.price
        })
      }, error => {
        console.log(error)
        this.productForm.reset();
      })
    }
  }

  
}
