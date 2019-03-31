import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-tourists-detail',
  templateUrl: './tourists-detail.component.html',
  styleUrls: ['./tourists-detail.component.scss']
})
export class TouristsDetailComponent implements OnInit {

  @ViewChild('questions') questions: ElementRef;
  @ViewChild('countries') countries: ElementRef;

  constructor(private router: Router, private scrollService: ScrollToService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let routerUrl = this.router.routerState.snapshot.url.split('/');
        let url = routerUrl[routerUrl.length - 1];

        switch (url) {
          case 'questions': {
            this.scrollToHome(this.questions.nativeElement);
            break;
          }
          case 'countries': {
            this.scrollToHome(this.countries.nativeElement);
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
