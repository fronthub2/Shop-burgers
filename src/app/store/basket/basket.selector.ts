import { createSelector } from '@ngrx/store';
import { currencyFeature } from '../currency/currency.reducer';
import { basketAdapter, basketFeature } from './basket.reducer';

const selectBasketState = basketFeature.selectBasketState;

const { selectAll, selectEntities } =
  basketAdapter.getSelectors(selectBasketState);

const selectCurrentCurrency = currencyFeature.selectCurrentCurrency;
const selectConversionCoeff = currencyFeature.selectConversionCoeff;

export const selectAllBasketProducts = selectAll;

export const selectBasketEntities = (id: number) =>
  createSelector(selectEntities, (entity) => entity[id]);
export const selectHasProductInBasket = (productId: number) =>
  createSelector(selectEntities, (entities) => !!entities[productId]);

export const selectBasketTotal = createSelector(selectAll, (products) =>
  products.reduce((sum, product) => sum + product.price, 0)
);

export const selectBasketProductById = (productId: number) =>
  createSelector(
    selectBasketEntities(productId),
    selectCurrentCurrency,
    selectConversionCoeff,
    (product, currentCurrency, conversionCoeff) => {
      if (!product) return undefined;

      const conversionRate =
        conversionCoeff[currentCurrency] || conversionCoeff.$;
      const basePrice = product.basePrice * conversionRate;
      const totalPrice = basePrice * product.quantity;

      return {
        ...product,
        price: totalPrice,
        basePrice: basePrice,
      };
    }
  );

export const selectBasketProducts = createSelector(
  selectAllBasketProducts,
  selectCurrentCurrency,
  selectConversionCoeff,
  (products, currentCurrency, conversionCoeff) => {
    const conversionRate =
      conversionCoeff[currentCurrency] || conversionCoeff.$;

    return products.map((prod) => {
      const basePrice = prod.basePrice * conversionRate;
      const totalPrice = basePrice * prod.quantity;

      return {
        ...prod,
        price: totalPrice,
        basePrice: basePrice,
      };
    });
  }
);
