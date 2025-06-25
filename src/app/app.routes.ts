import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      }
    ],
  },
];
