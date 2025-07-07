import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';
import { BasketMenuService } from 'src/app/services/basket-menu.service';
import { basketAction } from 'src/app/store/basket/basket.action';
import { currencyAction } from 'src/app/store/currency/currency.action';
import { currencyFeature } from 'src/app/store/currency/currency.reducer';
import { selectProductsWithConvertedPrice } from 'src/app/store/currency/currency.selector';
import { productsAction } from 'src/app/store/product/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private basketService: BasketMenuService, private store: Store) {}

  products$ = this.store.select(selectProductsWithConvertedPrice);
  currency$ = this.store.select(currencyFeature.selectCurrentCurrency);

  ngOnInit(): void {
    this.store.dispatch(productsAction.loadedProducts());
    this.store.dispatch(currencyAction.loadConversionCurrency());
  }

  addProductInBasket(product: Product): void {
    this.basketService.addBasketProducts(product);
    this.store.dispatch(
      basketAction.addedProductInBasket({
        product: { ...product, quantity: 1 },
      })
    );
  }

  isHasProductInBasket(productId: number): boolean {
    return this.basketService.hasProductInBasket(productId);
  }

  addQuantity(product: Product): void {
    this.store.dispatch(
      basketAction.incrementQuantityProduct({
        productId: product.id,
        quantity: product.quantity,
      })
    );
  }

  deleteQuantity(product: Product): void {
    // this.basketService.deleteQuantity(product);
    this.store.dispatch(
      basketAction.decrementQuantityProduct({
        productId: product.id,
        quantity: product.quantity,
      })
    );
  }

  getBasketProductById(productId: number): Product {
    return this.basketService.getBasketProductById(productId);
  }
}
