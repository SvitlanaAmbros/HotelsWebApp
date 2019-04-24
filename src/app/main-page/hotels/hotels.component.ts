import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsInfoService } from '../hotels-info.service';
import { hotels } from '../types/hotels';
import { HotelsBaseInfo } from '../models/hotels-base-info';
import { PopupControls, PopupControlsService } from '../../shared/services/popup-controls.service';
import { CurrentHotelInfo } from '../models/current-hotel-info';
import { FilterService } from '../filter.service';
import { SortService } from '../sort.service';
import { BookingRequest } from '../models/booking-request';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public serverHotelsBaseInfo: hotels.HotelsBaseInfo;
  public hotelsBaseInfo: hotels.HotelsBaseInfo;
  public currentHotelInfo: hotels.CurrentHotelInfo;

  // public sort
  public startHotelIndex:number = 0;
  public countHotelPerPage = 1; 
  public endHotelIndex: number = this.countHotelPerPage;
  public currentPage: number = 0;
  
  public hotelPopup: PopupControls;
  public resultPopup: PopupControls;
  public isOpenAddFilter: boolean = false;
  public stars:hotels.Stars[] = hotels.HOTEL__STARS;
  public roomTypes: hotels.RoomTypeFilter[] = hotels.ROOM_TYPES_FOR_FILTER;

  public currentDate = new Date();
  public defDate = new Date();

  public sortTypes = hotels.SORT_TYPES;

  public searchParams: hotels.hotelsSearchParams = {
    country: '',
    city: '',
    date: new Date(),
    days: 5,
    sortType: 'None',
    roomType: 'All'
  };

  public userInfo: hotels.UserInfo ={
    name: '',
    phone: '',
  }

  public countryCityInfo;
  // public countryCityInfo = {
  //   'Egypt': ['Hurgada', 'Sharm-el-Sheikh', 'Kair'],
  //   'Spain': [], 
  //   'Italy': ['Rome', 'Venecia', 'Florencia'], 
  //   'Georgia': [], 
  //   'Germany': [], 
  //   'France':['Nice', 'Paris'], 
  //   'Norway':[]
  // };

  public countryList: string[] = [];
  public cityList: string[] = [];

  constructor(private hotelsInfoService: HotelsInfoService,
    private popupControlsService: PopupControlsService,
    private filterService: FilterService,
    private sortService: SortService
    ) { }

  ngOnInit() {
    this.setCurrentDate();
    this.getCountryCityInfo(); 
    this.getAllHotels();
    this.initPopups();
  }

  public getAllHotels() {
    this.hotelsInfoService.getHotels().then((res) => {
      this.serverHotelsBaseInfo = new HotelsBaseInfo(res, this.searchParams.days);
      this.hotelsBaseInfo = new HotelsBaseInfo(res, this.searchParams.days);
      console.log('Received hotels', this.hotelsBaseInfo);
      this.searchHotels();
    });
  }

  public getCountryCityInfo() {
    this.hotelsInfoService.getCountryCityInfo().then((res) => {
      this.countryCityInfo = res;
      this.countryList = Object.keys(this.countryCityInfo);
    });
  }

  public showHotelDetail(hotelId) {
    this.hotelsInfoService.getCurrentHotelInfo(hotelId).then(hotelInfo => {
      this.currentHotelInfo = new CurrentHotelInfo(hotelInfo, this.searchParams.days, 
        this.searchParams.date);
      if (!!this.searchParams.roomType && this.searchParams.roomType != 'All') {
        this.currentHotelInfo.setPriceForRoomType(this.searchParams.roomType);
      }
      console.log("CURRENT", this.currentHotelInfo);
      this.openPopup(this.hotelPopup);
    });

  }


  // popup functions
  public initPopups():void {
    this.hotelPopup = this.popupControlsService.create();
    this.resultPopup = this.popupControlsService.create();
  }

  public openPopup(popup: PopupControls):void {
    popup.open();
  }

  public closePopup(popup: PopupControls):void {
   popup.close();
    this.currentHotelInfo = undefined;
  }
  //eof popup functions

  // pagination functions
  public returnToFirstPage() {
    this.currentPage = 0;
    this.updateHotels(0);
  }

  public updateHotels(page) {
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

    if (!!this.hotelsBaseInfo && this.hotelsBaseInfo.hotels.length > 0) {
      for(let i = this.startHotelIndex; i < this.endHotelIndex; i++) {
        hotels.push(this.hotelsBaseInfo.hotels[i]);
      }
    }
    
    return hotels;
  }

  get maxQuantityHotels() {
    return new Array(this.hotelsBaseInfo.hotels.length);
  }

  get pages() {
    return new Array(Math.ceil(this.hotelsBaseInfo.hotels.length / this.countHotelPerPage));
  }
  //eof pagination functions


  //search row
  // update calendar date
  public setCurrentDate() {
    this.defDate.setDate(this.currentDate.getDate() + 1);
    this.searchParams.date = this.defDate;
  }

  public changedCountry(country: string) {
    this.searchParams.country = country;

    if (!!this.countryCityInfo[country]) {
      this.cityList = this.countryCityInfo[country];
    } else {
      // this.cityList = [];
    }
  }

  public changedCity(city: string) {
    this.searchParams.city = city;
  }

  public searchHotels() {
    console.log(this.searchParams);
    this.hotelsBaseInfo.updateDaysCount(this.hotelsBaseInfo, this.searchParams.days);
    this.hotelsBaseInfo.hotels = this.filterService.filter(this.serverHotelsBaseInfo.hotels, 
              this.searchParams);
    
  }

  public sort() {
    switch(this.searchParams.sortType){
      case 'None':
        this.hotelsBaseInfo.hotels = this.filterService.filter(this.serverHotelsBaseInfo.hotels, 
              this.searchParams);
          break;
      case 'Asc': 
        this.hotelsBaseInfo.hotels = this.sortService.ascSort(this.hotelsBaseInfo.hotels);
        break;

      case 'Desc':
        this.hotelsBaseInfo.hotels = this.sortService.descSort(this.hotelsBaseInfo.hotels); 
        break;
    }
  }

  public showAdditionalFilters() {
    this.isOpenAddFilter = !this.isOpenAddFilter;
  }

  public orderHotel() {
    let booking = new BookingRequest(this.currentHotelInfo, this.userInfo)

    this.hotelsInfoService.orderHotelRoom(booking.getDbObject()).then(res => {
      console.log(res);
      this.hotelPopup.close();
      this.resultPopup.open();
      this.getAllHotels();
      // this.searchHotels();
    });
  }



}
