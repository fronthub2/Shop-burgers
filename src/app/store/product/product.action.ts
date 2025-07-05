import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';

export const productsAction = createActionGroup({
  source: 'Products',
  events: {
    'loaded products': emptyProps(),
    'loaded products success': props<{ products: Product[] }>(),
    'loaded products error': props<{ error: unknown }>(),
  },
});
