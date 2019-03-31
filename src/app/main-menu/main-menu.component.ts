import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit() {

  }

  public menuSelected(menuLink: string): void {
    this.router.navigateByUrl(menuLink);
  }


}
