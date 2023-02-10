import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'

 export interface Products  {
  id:number;
  title:string;
  price:number;
  category:string;
  description:string;
  image:string;
  length?:number;
  pop?:number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>('https://fakestoreapi.com/products')

  }
  getSingleProduct(id:string):Observable<Products>{
    console.log(id, 'request id')
    return this.http.get<Products>(`https://fakestoreapi.com/products/${id}`)

  }
}
