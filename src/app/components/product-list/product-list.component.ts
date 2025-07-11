import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.interface';
import { basketAction } from 'src/app/store/basket/basket.action';
import {
  selectBasketProductWithDynamicPricing,
  selectHasProductInBasket
} from 'src/app/store/basket/basket.selector';
import { currencyAction } from 'src/app/store/currency/currency.action';
import { currencyFeature } from 'src/app/store/currency/currency.reducer';
import { selectProductsWithConvertedPrice } from 'src/app/store/currency/currency.selector';
import { productsAction } from 'src/app/store/product/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  constructor(private store: Store) {}

  products$ = this.store.select(selectProductsWithConvertedPrice);
  currency$ = this.store.select(currencyFeature.selectCurrentCurrency);

  ngOnInit(): void {
    this.store.dispatch(productsAction.getProducts());
    this.store.dispatch(currencyAction.getConversionCurrency());
    this.store.dispatch(basketAction.getProductsFromBasket());
  }

  hasBasketProducts(productId: number): Observable<boolean | undefined> {
    return this.store.select(selectHasProductInBasket(productId));
  }

  addProductInBasket(product: Product): void {
    this.store.dispatch(basketAction.addProductInBasket({ product }));
  }

  addQuantity(product: Product): void {
    this.store.dispatch(
      basketAction.incrementProductInBasket({
        productId: product.id,
        quantity: product.quantity,
      })
    );
  }

  deleteQuantity(product: Product): void {
    this.store.dispatch(
      basketAction.decrementProductInBasket({
        productId: product.id,
        quantity: product.quantity,
      })
    );
  }

  getBasketProductById(productId: number): Observable<Product | undefined> {
    return this.store.select(selectBasketProductWithDynamicPricing(productId));
  }
}
