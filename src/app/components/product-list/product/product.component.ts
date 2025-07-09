import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CURRENCY } from 'src/app/model/currency.enum';
import { Product } from 'src/app/model/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent {
  @Input() product!: Product;
  @Input() currency!: CURRENCY;
  @Input() isHasProductInBasket$!:Observable<boolean>;
  @Input() productInBasket$!:Observable<Product | undefined>;
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
