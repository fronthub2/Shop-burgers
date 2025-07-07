import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';

export const basketAction = createActionGroup({
  source: 'Basket',
  events: {
    'loaded products in basket with local storage': emptyProps(),
    'loaded products in basket with local storage success': props<{ products: Product[] }>(),
    'loaded products in basket with local storage error': props<{ error:unknown }>(),
    'added product in basket': props<{ product: Product }>(),
    'delete product in basket': props<{ productId: number }>(),
    'increment quantity product': props<{ productId: number; quantity:number}>(),
    'decrement quantity product': props<{ productId: number; quantity:number}>(),
  },
});
