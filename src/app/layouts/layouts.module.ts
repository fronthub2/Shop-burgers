import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { LayoutsComponent } from './layouts.component';

@NgModule({
  declarations: [LayoutsComponent,MenuListComponent],
  exports: [LayoutsComponent],
  imports: [CommonModule, RouterOutlet],
})
export class LayoutsModule {}
