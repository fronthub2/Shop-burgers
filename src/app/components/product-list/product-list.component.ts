import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.interface';
import { BasketMenuService } from 'src/app/services/basket-menu.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(
    private productService: ProductService,
    private basketService: BasketMenuService
  ) {}

  products$ = this.productService.getProducts();
  currency$ = this.productService.getCurrency();

  addProductInBasket(product: Product): void {
    this.basketService.addBasketProducts(product);
  }

  isHasProductInBasket(productId: number): boolean {
    return this.basketService.hasProductInBasket(productId);
  }

  addQuantity(product: Product): void {
    this.basketService.addQuantity(product);
  }

  deleteQuantity(product: Product): void {
    this.basketService.deleteQuantity(product);
  }

}
