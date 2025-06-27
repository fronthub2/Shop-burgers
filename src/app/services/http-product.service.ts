import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpProductService {
  private productUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getHttpProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getHttpProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${productId}`);
  }
}
