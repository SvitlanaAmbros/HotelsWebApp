import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public menuList = [{title: 'Main'},
    {title: 'About us', sublist: [{title: 'Why you should choose us'}, {title: 'Services'}]},
    {title: 'For tourists', sublist: [{title: 'Questions and answers'}, {title: 'Abbreviations'}]},
    {title: 'Contacts'}];

  constructor() { }

  ngOnInit() {

  }

}
