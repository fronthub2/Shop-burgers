import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { CURRENCY } from '../model/currency.enum';
import { ScrollService } from '../services/scroll.service';
import { currencyAction } from '../store/currency/currency.action';
import { currencyFeature } from '../store/currency/currency.reducer';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutsComponent {
  constructor(private scrollService: ScrollService, private store: Store) {}

  currency$ = this.store.select(currencyFeature.selectCurrentCurrency);

  changeCurrency(): void {
    this.currency$.pipe(take(1)).subscribe({
      next: (c) => {
        this.store.dispatch(
          currencyAction.setCurrency({ newCurrency: this.getCurrency(c) })
        );
      },
    });
  }

  private getCurrency(currentCurrency: CURRENCY): CURRENCY {
    switch (currentCurrency) {
      case CURRENCY.USD:
        return CURRENCY.RUB;
      case CURRENCY.RUB:
        return CURRENCY.BYN;
      case CURRENCY.BYN:
        return CURRENCY.EUR;
      case CURRENCY.YEN:
        return CURRENCY.YEN;
      default:
        return CURRENCY.USD;
    }
  }

  scrollTo(element: string): void {
    this.scrollService.scrollToElement(element);
  }
}
