import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent],
  imports: [CommonModule, AsyncPipe],
})
export class ProductListModule {}
