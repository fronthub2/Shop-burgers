import { createSelector } from '@ngrx/store';
import { currencyFeature } from '../currency/currency.reducer';
import { productsFeature } from '../product/product.reducer';

const selectAllProducts = productsFeature.selectProducts;
const selectCurrentCurrency = currencyFeature.selectCurrentCurrency;
const selectConversionCoeff = currencyFeature.selectConversionCoeff;

export const selectProductsWithConvertedPrice = createSelector(
  selectAllProducts,
  selectCurrentCurrency,
  selectConversionCoeff,
  (products, currentCurrency, conversionCoeff) => {
    const conversionRate = conversionCoeff[currentCurrency] || conversionCoeff.$;
    return products.map((product) => ({
      ...product,
      price: parseFloat((product.basePrice * conversionRate).toFixed(2)),
    }));
  }
);