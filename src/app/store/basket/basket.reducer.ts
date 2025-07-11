import { createEntityAdapter, EntityAdapter, Update } from '@ngrx/entity';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Product } from 'src/app/model/product.interface';
import { basketAction } from './basket.action';

export const basketAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const initialBasketProductsState = basketAdapter.getInitialState();

const reducer = createReducer(
  initialBasketProductsState,
  on(basketAction.getProductsFromBasket, (state) => {
    return {
      ...state,
      error: undefined,
    };
  }),
  on(basketAction.getProductsFromBasketSuccess, (state, { products }) => {
    return basketAdapter.setAll(products, state);
  }),
  on(basketAction.getProductsFromBasketError, (state, { error }) => {
    return {
      ...state,
      error,
    };
  }),
  on(basketAction.addProductInBasket, (state, { product }) => {
    return basketAdapter.addOne({ ...product, quantity: 1 }, state);
  }),
  on(basketAction.deleteProductInBasket, (state, { productId }) => {
    return basketAdapter.removeOne(productId, state);
  }),
  on(
    basketAction.incrementProductInBasket,
    (state, { productId, quantity }) => {
      const newProduct: Update<Product> = {
        id: productId,
        changes: { quantity: quantity + 1 },
      };

      return basketAdapter.updateOne(newProduct, state);
    }
  ),
  on(
    basketAction.decrementProductInBasket,
    (state, { productId, quantity }) => {
      const currentQuantity = (state.entities[productId] as Product).quantity;

      const newProduct: Update<Product> = {
        id: productId,
        changes: { quantity: quantity - 1 },
      };

      if (currentQuantity === 1) {
        return basketAdapter.removeOne(productId, state);
      }

      return basketAdapter.updateOne(newProduct, state);
    }
  ),
);

export const basketFeature = createFeature({
  name: 'Basket',
  reducer,
  extraSelectors: ({ selectBasketState }) => {
    const { selectAll, selectEntities } = basketAdapter.getSelectors(selectBasketState);

    return {
      selectAllBasketItems: selectAll,
      selectBasketItemById: (id: number) =>
        createSelector(selectEntities, (entities) => entities[id]),
      selectHasProductInBasket: (productId: number) =>
        createSelector(selectEntities, (entities) => !!entities[productId]),
      selectTotalProductCount: createSelector(selectAll, (items) =>
        items.reduce((count, item) => count + item.quantity, 0)
      ),
    };
  },
});
