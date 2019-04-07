import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel;
  @Output() showHotelDetail: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public loadHotelDetail(id: number): void {
    this.showHotelDetail.emit(id);
  }
}
