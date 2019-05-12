import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-tourists-detail',
  templateUrl: './tourists-detail.component.html',
  styleUrls: ['./tourists-detail.component.scss']
})
export class TouristsDetailComponent implements OnInit {

  @ViewChild('questions') questions: ElementRef;
  @ViewChild('countries') countries: ElementRef;

  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let routerUrl = this.router.routerState.snapshot.url.split('/');
        let url = routerUrl[routerUrl.length - 1];

        switch (url) {
          case 'questions': {
            this.scrollService.scrollToElement(this.questions.nativeElement);
            break;
          }
          case 'countries': {
            this.scrollService.scrollToElement(this.countries.nativeElement);
            break;
          }
        }
      }
    });
  }

  ngOnInit() {
  }
}
