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
  on(currencyAction.setCurrency, (state, { newCurrency }) => ({
    ...state,
    currentCurrency: newCurrency,
  })),
  on(currencyAction.getConversionCurrency, (state) => ({
    ...state,
  })),
  on(currencyAction.getConversionCurrencySuccess, (state, { coeff }) => ({
    ...state,
    conversionCoeff: coeff,
  })),
  on(currencyAction.getConversionCurrencyError, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const currencyFeature = createFeature({
  name: 'Currency', 
  reducer,
});
