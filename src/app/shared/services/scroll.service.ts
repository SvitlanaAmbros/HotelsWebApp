import { Injectable } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';

@Injectable()
export class ScrollService {
  private duration: number = 700;

  constructor(private scrollToService: ScrollToService) { }

  scrollToElement(element) {
    this.scrollToService.scrollTo(element, this.duration, 0);
  }
}
