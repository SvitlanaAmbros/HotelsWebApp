import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public hotels = [
    {
      id: 1,
      title: 'Naama Bay Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 2,
      title: 'Sunrise Diamond Beach Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 3,
      title: 'Coral Sea Sensatory',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 4,
      title: 'Sphinx Aqua Park Beach Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 1,
      title: 'Naama Bay Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 2,
      title: 'Sunrise Diamond Beach Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 3,
      title: 'Coral Sea Sensatory',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    },
    {
      id: 4,
      title: 'Sphinx Aqua Park Beach Resort',
      roomType: 'Standart',
      nutrition: 'AI',
      flight: 'Included'
    }

  ];

  public pages = [];
  public countHotelPerPage = 1;

  constructor(private router: Router) { }

  ngOnInit() {
    let pagesCount = Math.ceil(this.hotels.length / this.countHotelPerPage);
    
    console.log('pages count', pagesCount);
  }

  public updateHotels():void {
    alert();
  }

  public showHotelDetail(id) {
    console.log(this.findHotelById(id));
    this.router.navigate(['main-page/hotel', id]);
  }

  public findHotelById(id: number) {
    return this.hotels.filter(item => item.id == id)[0];
  }
}
