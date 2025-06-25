import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LayoutsModule } from './layouts/layouts.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutsModule,
    LandingPageModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
