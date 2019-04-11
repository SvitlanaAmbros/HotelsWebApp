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

  public startHotelIndex:number = 0;
  public countHotelPerPage = 3; 
  public endHotelIndex: number = this.countHotelPerPage;
  public currentPage: number = 0;
  
  public hotelPopup: PopupControls;

  constructor(private router: Router, 
    private hotelInfoService: HotelsInfoService,
    private popupControlsService: PopupControlsService) { }

  ngOnInit() {
    this.hotelInfoService.getHotels().then((res) => {
      this.hotelsBaseInfo = new HotelsBaseInfo(res, this.days);
      console.log('Received hotels', this.hotelsBaseInfo);
    });
    
    this.initPopup();

    // let pagesCount = Math.ceil(this.hotels.length / this.countHotelPerPage);
  }

  public showHotelDetail(hotelId) {
    console.log('id' , hotelId);
 
    this.hotelInfoService.getCurrentHotelInfo(1).then(hotelInfo => {
      this.currentHotelInfo = new CurrentHotelInfo(hotelInfo, this.days);
      console.log("CURRENT", this.currentHotelInfo);
      this.openHotelPopup();
    });

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


  get pages() {
    return new Array(Math.ceil(this.hotelsBaseInfo.hotels.length / this.countHotelPerPage));
  }

  public updateHotels(page) {
    this.currentPage = page;
    console.log("count hotel per page" + this.countHotelPerPage);
    this.startHotelIndex = page * this.countHotelPerPage;
    if (this.startHotelIndex + this.countHotelPerPage < this.hotelsBaseInfo.hotels.length) {
      this.endHotelIndex = this.startHotelIndex + this.countHotelPerPage;
    } else {
      this.endHotelIndex = this.hotelsBaseInfo.hotels.length;
    }
    
    console.log("start", this.startHotelIndex, "end", this.endHotelIndex);
  }

  get getHotels() {
    let hotels = [];

    for(let i = this.startHotelIndex; i < this.endHotelIndex; i++) {
      hotels.push(this.hotelsBaseInfo.hotels[i]);
    }
    return hotels;
  }

  get maxQuantityHotels() {
    return new Array(this.hotelsBaseInfo.hotels.length);
  }
}
