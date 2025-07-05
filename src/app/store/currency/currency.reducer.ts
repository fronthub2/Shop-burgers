import { createFeature, createReducer, on } from '@ngrx/store';
import { CURRENCY } from 'src/app/model/currency.enum';
import { currencyAction } from './currency.action';

export interface CurrencyState {
  currentCurrency: CURRENCY;
  conversionCoeff: { [key in CURRENCY]: number };
}

export const initialCurrencyState: CurrencyState = {
  currentCurrency: CURRENCY.USD,
  conversionCoeff: {
    [CURRENCY.USD]: 1,
    [CURRENCY.RUB]: 80,
    [CURRENCY.BYN]: 3,
    [CURRENCY.EUR]: 0.9,
    [CURRENCY.YEN]: 6.9,
  },
};

const reducer = createReducer(
  initialCurrencyState,
  on(currencyAction.changeCurrency, (state, { newCurrency }) => ({
    ...state,
    currentCurrency: newCurrency,
  })),
  on(currencyAction.loadConversionCurrency, (state) => ({
    ...state,
  })),
  on(currencyAction.loadConversionCurrencySuccess, (state, { coeff }) => ({
    ...state,
    conversionRates: coeff,
  })),
  on(currencyAction.loadConversionCurrencyError, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const currencyFeature = createFeature({
  name: 'Currency', 
  reducer,
});
