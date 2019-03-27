import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: {
    lat: number,
    lng: number,
    title: string
  };

  constructor() { }

  ngOnInit() {
  }

}
