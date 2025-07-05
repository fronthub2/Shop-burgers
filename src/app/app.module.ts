import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LayoutsModule } from './layouts/layouts.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { currencyFeature } from './store/currency/currency.reducer';
import { ProductEffects } from './store/product/product.effects';
import { productsFeature } from './store/product/product.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutsModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(productsFeature),
    StoreModule.forFeature(currencyFeature),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Burger Shop v16',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
