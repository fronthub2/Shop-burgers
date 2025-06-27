import { CURRENCY } from "./currency.enum";

export interface CurrencyConversion {
  newCurrency: CURRENCY;
  coefficient: number;
}
