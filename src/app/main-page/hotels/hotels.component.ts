import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public hotels = [
    {
      title: 'Naama Bay Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      title: 'Naama Bay Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    }
  ];

  public pages = [];
  public countHotelPerPage = 1;

  constructor() { }

  ngOnInit() {
    let pagesCount = Math.ceil(this.hotels.length / this.countHotelPerPage);
    
    console.log('pages count', pagesCount);
  }

  public updateHotels():void {
    alert();
  }
}
