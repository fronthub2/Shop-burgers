import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { OrderComponent } from './components/order/order.component';
import { WhyItemComponent } from './components/why-item/why-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListModule } from 'src/app/components/product-list/product-list.module';
import { SharedModule } from "../../shared/shared.module";
import { AuthOrderPipe } from 'src/app/pipe/auth-order.pipe';

@NgModule({
  declarations: [LandingPageComponent, OrderComponent, WhyItemComponent, AuthOrderPipe],
  exports: [LandingPageComponent],
  imports: [CommonModule, ReactiveFormsModule, ProductListModule, SharedModule],
})
export class LandingPageModule {}
