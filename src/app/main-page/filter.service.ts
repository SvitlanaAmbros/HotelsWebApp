import { Injectable } from '@angular/core';
import { hotels } from './types/hotels';

@Injectable()
export class FilterService {

  public functions: any[] = [];
  constructor() { 
  }

  public filter(array: hotels.HotelBaseInfo[], 
          searchParams: hotels.hotelsSearchParams): hotels.HotelBaseInfo[] {
    let resArray = this.filterByCity(array, searchParams.city);

    return resArray;
  }

  private filterByCity(hotels: hotels.HotelBaseInfo[], cityName: string): hotels.HotelBaseInfo[]{
    return hotels.filter(item => item.city == cityName);
  }
}
