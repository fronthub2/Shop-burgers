import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CURRENCY } from "src/app/model/currency.enum";

export const currencyAction = createActionGroup({
    source: 'Currency',
    events: {
        'set currency': props<{ newCurrency: CURRENCY }>(),
        'get conversion currency': emptyProps(),
        'get conversion currency success': props<{ coeff: { [key in CURRENCY]: number } }>(),
        'get conversion currency error': props<{ error: unknown }>(),
    }
})