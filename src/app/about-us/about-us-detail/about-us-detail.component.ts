import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-about-us-detail',
  templateUrl: './about-us-detail.component.html',
  styleUrls: ['./about-us-detail.component.scss']
})
export class AboutUsDetailComponent implements OnInit {

  @ViewChild('choose') chooseUs: ElementRef;
  @ViewChild('services') services: ElementRef;

  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let routerUrl = this.router.routerState.snapshot.url.split('/');
        let url = routerUrl[routerUrl.length - 1];

        switch (url) {
          case 'choose-us': {
            this.scrollService.scrollToElement(this.chooseUs.nativeElement);
            break;
          }
          case 'services': {
            this.scrollService.scrollToElement(this.services.nativeElement);
            break;
          }
        }
      }
    });
  }

  ngOnInit() {
  }
}
