import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  AddProduct(data:any){
return this.http.post('http://localhost:3000/products',data)
  }
}
