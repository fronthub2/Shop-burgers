import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollToElement(elementId: string, attempts = 0) {
    if (attempts > 3) return;
  
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setTimeout(() => {
        this.scrollToElement(elementId, attempts + 1);
      }, 300);
    }
  }
}
