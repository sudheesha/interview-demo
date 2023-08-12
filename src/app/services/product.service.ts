import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList = (): Observable<Product[]> => {
    return this.http
      .get<any>('https://dummyjson.com/products')
      .pipe(map(({ products }) => products));
  };
}
