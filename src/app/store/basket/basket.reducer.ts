import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';
import { basketAction } from './basket.action';

export interface BasketState extends EntityState<Product> {
  selectedProductId: number | null;
}

export const productAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>({
    selectId: (product: Product) => product.id,
  });

export const initialBasketProducts: BasketState =
  productAdapter.getInitialState({
    selectedProductId: null,
  });

const reducer = createReducer(
  initialBasketProducts,
  on(basketAction.loadedProductsInBasketWithLocalStorage, (state) => {
    return {
      ...state,
    };
  }),
  on(
    basketAction.loadedProductsInBasketWithLocalStorageSuccess,
    (state, products) => {
      return {
        ...state,
        products,
      };
    }
  ),
  on(
    basketAction.loadedProductsInBasketWithLocalStorageError,
    (state, { error }) => {
      return {
        ...state,
        error,
      };
    }
  ),
  on(basketAction.addedProductInBasket, (state, { product }) => {
    return productAdapter.addOne(product, state);
  }),
  on(basketAction.deleteProductInBasket, (state, { productId }) => {
    return productAdapter.removeOne(productId, state);
  }),
  on(
    basketAction.incrementQuantityProduct,
    (state, { productId, quantity }) => {
      const currentQuantity = (state.entities[productId] as Product).quantity;

      const newProduct: Update<Product> = {
        id: productId,
        changes: { quantity: quantity + currentQuantity },
      };
      return productAdapter.updateOne(newProduct, state);
    }
  ),
  on(
    basketAction.decrementQuantityProduct,
    (state, { productId, quantity }) => {
      const newProduct: Update<Product> = {
        id: productId,
        changes: { quantity: quantity },
      };

      return productAdapter.updateOne(newProduct, state);
    }
  )
);

export const basketProductsFeature = createFeature({
  name: 'Basket Product',
  reducer,
});
