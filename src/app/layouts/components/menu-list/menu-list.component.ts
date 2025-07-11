import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent {
  @Output() emitScroll = new EventEmitter<string>();

  eventScroll(element: string): void {
    this.emitScroll.emit(element);
  }
}
