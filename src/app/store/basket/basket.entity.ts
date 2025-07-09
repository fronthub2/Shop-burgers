import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Product } from "src/app/model/product.interface";

export interface BasketState extends EntityState<Product> {
    products: Product[];
  }