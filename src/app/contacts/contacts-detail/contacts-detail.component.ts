import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {

  public contacts = [
    {
      lat: 50.449237,
      lng: 30.466378,
      title: 'KPI'
    },
    {
      lat: 50.445379,
      lng: 30.519109,
      title: 'Khreshchatyk'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
