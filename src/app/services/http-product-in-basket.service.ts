import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpProductInBasketService {
  private basketUrl = 'http://localhost:3000/productsInBasket';

  constructor(private http: HttpClient) {}

  getHttpBasketProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.basketUrl);
  }

  getHttpBasketProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.basketUrl}/${productId}`);
  }
}
