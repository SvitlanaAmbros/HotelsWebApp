import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsInfoService } from '../hotels-info.service';
import { hotels } from '../types/hotels';
import { HotelsBaseInfo } from '../models/hotels-base-info';
import { PopupControls, PopupControlsService } from '../../shared/services/popup-controls.service';
import { CurrentHotelInfo } from '../models/current-hotel-info';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public hotelsBaseInfo: hotels.HotelsBaseInfo;
  public days: number = 1;
  public currentHotelInfo: hotels.CurrentHotelInfo;

  public hotelPopup: PopupControls;

  public pages = [];
  public countHotelPerPage = 1;

  constructor(private router: Router, 
    private hotelInfoService: HotelsInfoService,
    private popupControlsService: PopupControlsService) { }

  ngOnInit() {
    this.hotelInfoService.getHotels().then((res) => {
      this.hotelsBaseInfo = new HotelsBaseInfo(res, this.days);
      console.log('Received hotels', this.hotelsBaseInfo);
    });

    this.hotelInfoService.getCurrentHotelInfo(1).then(hotelInfo => {
      this.currentHotelInfo = new CurrentHotelInfo(hotelInfo, this.days);
      console.log("CURRENT", this.currentHotelInfo);
    });
    
    this.initPopup();

    // let pagesCount = Math.ceil(this.hotels.length / this.countHotelPerPage);
  }

  public showHotelDetail(hotelId) {
    console.log('id' , hotelId);
    
    // this.hotelInfoService.getCurrentHotelInfo(hotelId).then(hotelInfo => {
    //   this.currentHotelInfo = new CurrentHotelInfo(hotelInfo);
    //   console.log("CURRENT", this.currentHotelInfo);
    // });


    this.openHotelPopup();

  }

  public initPopup():void {
    this.hotelPopup = this.popupControlsService.create();
  }

  public openHotelPopup():void {
    this.hotelPopup.open();
  }

  public closeHotelPopup():void {
    this.hotelPopup.close();
    this.currentHotelInfo = undefined;
  }

  // public findHotelById(id: number) {
    // return this.hotels.filter(item => item.id == id)[0];
  // }
    // public updateHotels():void {
  //   alert();
  // }
}
