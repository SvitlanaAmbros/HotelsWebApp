import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() countryInfo;

  constructor() { }

  ngOnInit() {
  }

}
