import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CURRENCY } from 'src/app/model/currency.enum';
import { Product } from 'src/app/model/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() currency!: CURRENCY;
  @Input() isHasProductInBasket!: boolean;
  @Input() productInBasket!:Product;
  @Output() emitProductInBasket = new EventEmitter<Product>();
  @Output() emitAddQuantityProduct = new EventEmitter<Product>();
  @Output() emitDeleteQuantityProduct = new EventEmitter<Product>();

  eventProductInBasket(product: Product): void {
    this.emitProductInBasket.emit(product);
  }

  eventAddQuantityProduct(product: Product): void {
    this.emitAddQuantityProduct.emit(product);
  }

  eventDeleteQuantityProduct(product: Product): void {
    this.emitDeleteQuantityProduct.emit(product);
  }
}
