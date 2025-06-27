import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Product } from '../model/product.interface';
import { HttpProductService } from './http-product.service';
import { CURRENCY } from '../model/currency.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _currency = new BehaviorSubject<CURRENCY>(CURRENCY.USD);
  private _products = new BehaviorSubject<Product[]>([]);

  constructor(private httpProductService: HttpProductService) {
    this.httpProductService.getHttpProducts().subscribe({
      next: (products) => this._products.next(products),
    });
  }

  nextCurrencyInfo$ = this.getCurrency().pipe(
    map((currentCurrency) => {
      switch (currentCurrency) {
        case CURRENCY.USD:
          return { newCurrency: CURRENCY.RUB, coefficient: 80 };
        case CURRENCY.RUB:
          return { newCurrency: CURRENCY.BYN, coefficient: 3 };
        case CURRENCY.BYN:
          return { newCurrency: CURRENCY.EUR, coefficient: 0.9 };
        case CURRENCY.YEN:
          return { newCurrency: CURRENCY.YEN, coefficient: 6.9 };
        default:
          return { newCurrency: CURRENCY.USD, coefficient: 1 };
      }
    })
  );

  getCurrency(): Observable<CURRENCY> {
    return this._currency.asObservable();
  }

  setCurrency(newCurency: CURRENCY): void {
    this._currency.next(newCurency);
  }

  getProducts(): Observable<Product[]> {
    return this._products.asObservable();
  }

  goToNextCurrency(): void {
    this.nextCurrencyInfo$.pipe(take(1)).subscribe((conversionInfo) => {
      this.setCurrency(conversionInfo.newCurrency);
      this.updatePriceProduct(conversionInfo.coefficient);
    });
  }

  updatePriceProduct(coeff: number): void {
    this.getProducts()
      .pipe(
        map((prs) => prs.map((pr) => (pr.price = pr.basePrice * coeff))),
        take(1)
      )
      .subscribe();
  }
}
