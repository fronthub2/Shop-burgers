import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      }
    ],
  },
];
