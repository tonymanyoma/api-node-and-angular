import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


const url = 'http://localhost:3000/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(url);
  }

  deleteProduct(id: string): Observable<any>{
    return this.http.delete(url + 'delete?productID=' + id);
  }

  createProduct(product: Product): Observable<any>{
    return this.http.post(url + 'create', product);
  }

  getProduct(id: string): Observable<any>{
    return this.http.get(url + id);
  }

  updateProduct(id: string, product: Product): Observable<any>{
    return this.http.put(url + 'update?productID=' + id, product)
  }

}
