import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit {

  @Input() hotel;
  constructor() { }

  ngOnInit() {
  }

}
