import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { OrderComponent } from './components/order/order.component';
import { WhyItemComponent } from './components/why-item/why-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListModule } from 'src/app/components/product-list/product-list.module';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [LandingPageComponent, OrderComponent, WhyItemComponent],
  exports: [LandingPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ProductListModule, SharedModule],
})
export class LandingPageModule {}
