import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CURRENCY } from "src/app/model/currency.enum";

export const currencyAction = createActionGroup({
    source: 'Currency',
    events: {
        'Change Currency': props<{ newCurrency: CURRENCY }>(),
        'load conversion currency': emptyProps(),
        'load conversion currency success': props<{ coeff: { [key in CURRENCY]: number } }>(),
        'load conversion currency error': props<{ error: unknown }>(),
    }
})