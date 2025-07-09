import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';

export const productsAction = createActionGroup({
  source: 'Products',
  events: {
    'get products': emptyProps(),
    'get products success': props<{ products: Product[] }>(),
    'get products error': props<{ error: unknown }>(),
  },
});
