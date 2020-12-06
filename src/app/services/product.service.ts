import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = './assets/product.json'
  products: Product[];
  product: Product;


  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // getProductByCategory(category: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl)
  //   .pipe(
  //     filter(prod => prod.category === category)
  //   )
  // }

   getFrisur(id: string){
      // return this.getProductByCategory()
      // .pipe(map( (products: Product[]) => products.find( f => f.id === id) ));
   }
}
