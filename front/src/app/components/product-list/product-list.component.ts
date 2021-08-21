import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe(data => {
      this.listProducts = data.products;
    }, error => {
      console.log(error)
    })
  }

  deleteProduct(id: any){
    this._productService.deleteProduct(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto eliminado');
      this.getProducts();
    }, error => {
      console.log(error)
    })
  }

}
