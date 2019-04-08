import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { hotels } from '../types/hotels';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: hotels.HotelBaseInfo;
  @Output() showHotelDetail: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public loadHotelDetail(id: number): void {
    this.showHotelDetail.emit(id);
  }
}
