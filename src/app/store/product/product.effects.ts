import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpProductService } from 'src/app/services/http-product.service';
import { productsAction } from './product.action';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private httpProductService: HttpProductService
  ) {}

  loadedProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(productsAction.getProducts),
      switchMap(() =>
        this.httpProductService.getHttpProducts().pipe(
          map((products) => productsAction.getProductsSuccess({ products })),
          catchError((error) =>
            of(productsAction.getProductsError({ error }))
          )
        )
      )
    )
  );
}
