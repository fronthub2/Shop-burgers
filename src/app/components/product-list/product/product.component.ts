import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.interface';
import { CURRENCY } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() currency!: CURRENCY;
}
