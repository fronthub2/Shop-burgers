import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent {
  constructor(private productService: ProductService) {}
  currency$ = this.productService.getCurrency();

  changeCurrency() {
    this.productService.goToNextCurrency();
  }
}
