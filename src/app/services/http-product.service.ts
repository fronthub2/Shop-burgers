import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpProductService {
  private productUrlJSON: string = 'assets/data/product.json';

  constructor(private http: HttpClient) {}

  getHttpProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrlJSON);
  }

  getHttpProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrlJSON}/${productId}`);
  }
}
