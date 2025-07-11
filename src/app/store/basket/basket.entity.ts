import { EntityState } from '@ngrx/entity';
import { BasketProduct } from 'src/app/model/product.interface';

export interface BasketState extends EntityState<BasketProduct> {
  products: BasketProduct[];
}
