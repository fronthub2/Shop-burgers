import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, withLatestFrom } from 'rxjs';
import { basketAction } from 'src/app/store/basket/basket.action';
import {
  selectAllBasketProducts,
  selectBasketProducts,
} from 'src/app/store/basket/basket.selector';
import { currencyFeature } from 'src/app/store/currency/currency.reducer';
import { validPhoneNumber } from './order.validators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  private currency$ = this.store.select(currencyFeature.selectCurrentCurrency);
  private _destroy = new Subject<void>();

  ngOnInit(): void {
    this.setTitle();
    this.setTotalPrice();
  }

  form = new FormGroup({
    order: new FormControl<string[] | null>(null, [Validators.required]),
    name: new FormControl<string>('', [Validators.required]),
    phone: new FormControl<number | null>(null, [Validators.required, validPhoneNumber()]),
    totalPrice: new FormControl<string>(''),
  });

  confirmOrder() {
    if (this.form.valid) {
      alert('Спасибо за заказ! Мы скоро с вами свяжемся!');
      this.form.reset();
      this.store.dispatch(basketAction.clearProductInBasket());
    }
  }

  private setTitle(): void {
    this.store
      .select(selectAllBasketProducts)
      .pipe(takeUntil(this._destroy))
      .subscribe((products) => {
        this.form.controls.order.setValue(products.map((prod) => prod.title));
      });
  }

  private setTotalPrice(): void {
    this.store
      .select(selectBasketProducts)
      .pipe(withLatestFrom(this.currency$), takeUntil(this._destroy))
      .subscribe(([prod, currency]) => {
        const totalPrice = prod.reduce((acc, val) => acc + val.price, 0);
        this.form.controls.totalPrice.setValue(totalPrice + currency);
      });
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}
