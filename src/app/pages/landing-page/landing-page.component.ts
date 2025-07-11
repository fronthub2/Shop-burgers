import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  constructor(private scrollService: ScrollService) {}

  scroll(element: string) {
    this.scrollService.scrollToElement(element);
  }
}
