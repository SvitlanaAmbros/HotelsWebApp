import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public checkedMenuItem:string[];
  public menuList = [
    {
      title: 'Main',
      routerLink: 'main-page'
    },
    {
      title: 'About us', 
      routerLink: 'about-us',
      sublist: [
        {
          title: 'Why you should choose us',
          routerLink: 'choose-us'
        }, 
        {
          title: 'Services',
          routerLink: 'services'
        }
      ]
    },
    {
      title: 'For tourists', 
      routerLink: 'for-tourists',
      sublist: [
        {
          title: 'Questions and answers',
          routerLink: 'questions'
        }, 
        {
          title: 'Countries',
          routerLink: 'countries'
        }
      ]
    },
    {
      title: 'Contacts',
      routerLink: 'contacts'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let routerUrl = this.router.routerState.snapshot.url.split('/');
        this.checkedMenuItem = routerUrl.filter(item => item !='');
        // routerUrl[routerUrl.length - 1];
      }
    });
  }

  ngOnInit() {
    
  }

  public menuSelected(menuLink: string): void {
    this.router.navigateByUrl(menuLink);
  }
}
