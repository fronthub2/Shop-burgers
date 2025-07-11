import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpProductInBasketService } from 'src/app/services/http-product-in-basket.service';
import { basketAction } from './basket.action';

@Injectable()
export class BasketEffects {
  constructor(
    private action$: Actions,
    private basketService: HttpProductInBasketService,
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
}
