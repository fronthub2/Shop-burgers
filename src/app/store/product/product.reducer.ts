import { createFeature, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';
import { productsAction } from './product.action';

export interface ProductsState {
  products: Product[];
  coeff: number;
  loading: boolean;
  error: unknown;
}

export const initialProductState: ProductsState = {
  products: [],
  coeff: 0,
  loading: false,
  error: undefined,
};

const reducer = createReducer(
  initialProductState,
  on(productsAction.getProducts, (state) => {
    return {
      ...state,
      loading: true,
      error: undefined,
    };
  }),
  on(productsAction.getProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      loading: false,
    };
  }),
  on(productsAction.getProductsError, (state, { error }) => {
    return {
      ...state,
      error,
      loading: false,
      products: [],
    };
  })
);

export const productsFeature = createFeature({
  name: 'Products',
  reducer,
});
