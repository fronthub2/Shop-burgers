import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpProductInBasketService } from 'src/app/services/http-product-in-basket.service';
import { basketAction } from './basket.action';
import { basketFeature } from './basket.reducer';

@Injectable()
export class BasketEffects {
  constructor(
    private action$: Actions,
    private basketService: HttpProductInBasketService,
    private store: Store
  ) {}

  getProductsFromBasket$ = createEffect(() =>
    this.action$.pipe(
      ofType(basketAction.getProductsFromBasket),
      switchMap(() =>
        this.basketService.getHttpBasketProducts().pipe(
          map((products) =>
            basketAction.getProductsFromBasketSuccess({ products })
          ),
          catchError((error) =>
            of(basketAction.getProductsFromBasketError({ error }))
          )
        )
      )
    )
  );

  // saveProductFromBasket$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(basketAction.postProductsFromBasket),
  //     withLatestFrom(this.store.select(basketFeature.selectAllBasketItems)),
  //     switchMap(([action, product]) =>
  //       this.basketService.postHttpBasketProductById(product).pipe(
  //         map(() => basketAction.postProductsFromBasketSuccess()),
  //         catchError((error) =>
  //           of(basketAction.postProductsFromBasketError({ error }))
  //         )
  //       )
  //     )
  //   )
  // );
}
