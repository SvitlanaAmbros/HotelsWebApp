import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsInfoService } from '../hotels-info.service';
import { hotels } from '../types/hotels';
import { HotelsBaseInfo } from '../models/hotels-base-info';
import { PopupControls, PopupControlsService } from '../../shared/services/popup-controls.service';
import { CurrentHotelInfo } from '../models/current-hotel-info';
import { FilterService } from '../filter.service';
import { SortService } from '../sort.service';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public serverHotelsBaseInfo: hotels.HotelsBaseInfo;
  public hotelsBaseInfo: hotels.HotelsBaseInfo;
  public days: number = 1;
  public currentHotelInfo: hotels.CurrentHotelInfo;

  // public sortTypes = [
  //   {
  //     type: 'None',
  //     icon: 'fa-times'
  //   }, 
  //   {
  //     type: 'Asc',
  //     icon: 'fa-arrow-up'
  //   },
  //   {
  //      type:'Desc',
  //      icon: 'fa-arrow-down'
  //   }
  // ];

  // public sort
  public startHotelIndex:number = 0;
  public countHotelPerPage = 1; 
  public endHotelIndex: number = this.countHotelPerPage;
  public currentPage: number = 0;
  
  public hotelPopup: PopupControls;

  public currentDate;

  public sortTypes = hotels.SORT_TYPES;

  public searchParams: hotels.hotelsSearchParams = {
    country: 'Ukraine',
    city: 'Kiev',
    date: new Date(),
    days: 1,
    sortType: 'None'
  };

  public countryCityInfo = {
    'Egypt': ['Hurgada', 'Sharm-el-Sheikh', 'Kair'],
    'Spain': [], 
    'Italy': ['Rome', 'Venecia', 'Florencia'], 
    'Georgia': [], 
    'Germany': [], 
    'France':['Nice', 'Paris'], 
    'Norway':[]
  };

  public countryList: string[] = [];
  public cityList: string[] = [];

  constructor(private hotelInfoService: HotelsInfoService,
    private popupControlsService: PopupControlsService,
    private filterService: FilterService,
    private sortService: SortService
    ) { }

  ngOnInit() {
    this.setCurrentDate();
    this.countryList = Object.keys(this.countryCityInfo);

    this.hotelInfoService.getHotels().then((res) => {
      this.serverHotelsBaseInfo = new HotelsBaseInfo(res, this.days);
      this.hotelsBaseInfo = new HotelsBaseInfo(res, this.days);
      console.log('Received hotels', this.hotelsBaseInfo);
    });
    
    this.initPopup();
  }

  public showHotelDetail(hotelId) {
    console.log('id' , hotelId);
 
    this.hotelInfoService.getCurrentHotelInfo(1).then(hotelInfo => {
      this.currentHotelInfo = new CurrentHotelInfo(hotelInfo, this.days);
      console.log("CURRENT", this.currentHotelInfo);
      this.openHotelPopup();
    });

  }


  // popup functions
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
    this.currentDate = new Date();
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


}
