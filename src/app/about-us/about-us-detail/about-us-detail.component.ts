import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-about-us-detail',
  templateUrl: './about-us-detail.component.html',
  styleUrls: ['./about-us-detail.component.scss']
})
export class AboutUsDetailComponent implements OnInit {

  @ViewChild('choose') chooseUs: ElementRef;
  @ViewChild('services') services: ElementRef;

  constructor(private router: Router, private scrollService: ScrollToService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('route changed');
        let routerUrl = this.router.routerState.snapshot.url.split('/');
        let url = routerUrl[routerUrl.length - 1];
        console.log(url);

        switch (url) {
          case 'choose-us': {
            this.scrollToHome(this.chooseUs.nativeElement);
            break;
          }
          case 'services': {
            this.scrollToHome(this.services.nativeElement);
            break;
          }
        }
      }
    });
  }

  ngOnInit() {
  }

  scrollToHome(element) {
    this.scrollService.scrollTo(element, 700, 0);
  }

}
