import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CURRENCY } from '../model/currency.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _currency = new BehaviorSubject<CURRENCY>(CURRENCY.USD);

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
}
