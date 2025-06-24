import { Component } from '@angular/core';
import { CURRENCY, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}
  
  products$ = this.productService.getProducts();
  currency: CURRENCY = CURRENCY.USD;
  currency$ = this.productService.getCurrency();
}
