import { Component, OnInit, Input } from '@angular/core';

declare const google: any;

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @Input() latitude: number = 32.7767;
  @Input() longitude: number = -96.7970;
  @Input() cityName: string = "City";

  constructor() { }

  ngOnInit() {
    const city = {lat: this.latitude, lng: this.longitude};

    let map = new google.maps.Map(document.getElementById('map'), {
        center: city,
        zoom: 15
    });

    let marker = new google.maps.Marker({
        position: city,
        map: map,
        title: this.cityName 
    });
  }
}
