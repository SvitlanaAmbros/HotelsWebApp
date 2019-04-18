import { Injectable } from '@angular/core';
import { hotels } from './types/hotels';
import { SortService } from './sort.service';

@Injectable()
export class FilterService {

  public functions: any[] = [];

  constructor() { 
  }

  public filter(array: hotels.HotelBaseInfo[], 
          searchParams: hotels.hotelsSearchParams): hotels.HotelBaseInfo[] {
    // let filterArray = new FilterArray();

    let resArray = this.filterByCountry(array, searchParams.country);
    resArray = this.filterByCity(resArray, searchParams.city);
    resArray = this.filterByDateAndDays(resArray, searchParams);

    // if (searchParams.sortType == 'Asc') {
    //   resArray = this.sortService.ascSort(resArray);
    // } else if (searchParams.sortType == 'Desc') {
    //   resArray = this.sortService.descSort(resArray);
    // }

    return resArray; 

}
  private filterByCountry(hotels: hotels.HotelBaseInfo[], country: string): hotels.HotelBaseInfo[]{
    return hotels.filter(item => item.country == country);
  }

  private filterByCity(hotels: hotels.HotelBaseInfo[], cityName: string): hotels.HotelBaseInfo[]{
    return hotels.filter(item => item.city == cityName);
  }

  private filterByDateAndDays(hotels: hotels.HotelBaseInfo[], 
              searchParams: hotels.hotelsSearchParams): hotels.HotelBaseInfo[]{
    return hotels.filter((hotel: hotels.HotelBaseInfo) => {
      let res = false;
      for(let room of hotel.rooms) {
        if (this.checkRoomOnDateAndDays(room, searchParams)) {
          res = true;
          break;
        }
      }

      return res;
    });
  }

  private checkRoomOnDateAndDays(roomTypeInfo: hotels.Room, searchParams: hotels.hotelsSearchParams) {
    //check free rooms
    let roomIsFound = true;
    for (let room of roomTypeInfo.bookedRooms) {
      let roomDate = new Date(room.date);
      let userDate = new Date(searchParams.date);
      
      for (let day = 0; day < searchParams.days; day++) {
        if (roomDate.getTime() == userDate.getTime()) {
          if (room.count >= roomTypeInfo.roomsCount) {
            roomIsFound = false;
          }
        }

        userDate.setDate(userDate.getDate() + 1);
      }

      if (!roomIsFound) {
        break;
      }
    }

    return roomIsFound;
  }

}
