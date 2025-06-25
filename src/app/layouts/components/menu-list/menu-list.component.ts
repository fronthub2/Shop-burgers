import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  @Output() emitScroll = new EventEmitter<string>();

  eventScroll(element:string) {
    this.emitScroll.emit(element);
  }
}
