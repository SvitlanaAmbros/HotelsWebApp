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
      title: 'KPI',
      address: 'Kiev, Polytechnic street 11',
      phone: '0 899 555 444'
    },
    {
      lat: 50.445379,
      lng: 30.519109,
      title: 'Khreshchatyk',
      address: 'Kiev, Bogdan Khmelnitsky street 6',
      phone: '0 888 333 444'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
