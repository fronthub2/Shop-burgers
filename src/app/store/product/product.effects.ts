import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { productsAction } from './product.action';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private productService: ProductService
  ) {}

  loadedProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(productsAction.loadedProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => productsAction.loadedProductsSuccess({ products })),
          catchError((error) =>
            of(productsAction.loadedProductsError({ error }))
          )
        )
      )
    )
  );
}
