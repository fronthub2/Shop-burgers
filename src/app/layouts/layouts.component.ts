import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent {
  constructor(
    private productService: ProductService,
    private scrollService: ScrollService
  ) {}

  currency$ = this.productService.getCurrency();

  changeCurrency() {
    this.productService.goToNextCurrency();
  }

  scrollTo(element: string) {
    this.scrollService.scrollToElement(element);
  }
}
