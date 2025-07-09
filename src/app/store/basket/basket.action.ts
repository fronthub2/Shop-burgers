import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';

export const basketAction = createActionGroup({
  source: 'Basket',
  events: {
    'get products from basket': emptyProps(),
    'get products from basket success': props<{ products: Product[] }>(),
    'get products from basket error': props<{ error:unknown }>(),
    'add product in basket': props<{ product: Product }>(),
    'delete product in basket': props<{ productId: number }>(),
    'increment product in basket': props<{ productId: number; quantity:number}>(),
    'decrement product in basket': props<{ productId: number; quantity:number}>(),
    'post products from basket': emptyProps(),
    'post products from basket success': emptyProps(),
    'post products from basket error': props<{ error: unknown }>()
  },
});
