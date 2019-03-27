import { Component, OnInit, Input } from '@angular/core';
import { IdGeneratorService } from '../services/id-generator.service';

declare const google: any;

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  @Input() lat: number = 32.7767;
  @Input() lng: number = -96.7970;
  @Input() title: string = "City";
  public id: string;

  constructor(private idGeneratorService: IdGeneratorService) { }

  ngOnInit() {
    this.id = this.idGeneratorService.generateId('map');
  }

  ngAfterViewInit() {
    const city = {
      lat: this.lat, 
      lng: this.lng
    };

    let map = new google.maps.Map(document.getElementById(this.id), {
        center: new google.maps.LatLng(city.lat, city.lng),
        zoom: 15
    });

    let marker = new google.maps.Marker({
        position: city,
        map: map,
        title: this.title
    });
  }
}
