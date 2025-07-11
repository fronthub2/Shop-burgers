import { createSelector } from '@ngrx/store';
import { currencyFeature } from '../currency/currency.reducer';
import { basketAdapter, basketFeature } from './basket.reducer';

const selectBasketState = basketFeature.selectBasketState;
const { selectAll, selectEntities } =
  basketAdapter.getSelectors(selectBasketState);

export const selectBasketProducts = selectAll;
export const selectBasketProductById = (id: number) =>
  createSelector(selectEntities, (entity) => entity[id]);
export const selectHasProductInBasket = (productId: number) =>
  createSelector(selectEntities, (entities) => !!entities[productId]);

export const selectBasketTotal = createSelector(
  selectBasketProducts,
  (products) => products.reduce((sum, product) => sum + product.price, 0)
);

const selectCurrentCurrency = currencyFeature.selectCurrentCurrency;
const selectConversionCoeff = currencyFeature.selectConversionCoeff;

export const selectBasketProductWithDynamicPricing = (productId: number) =>
  createSelector(
    selectBasketProductById(productId),
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
