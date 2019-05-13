import { Injectable } from '@angular/core';
import { hotels } from './types/hotels';

@Injectable()
export class SortService {

  constructor() { }

  public ascSort(hotels: hotels.HotelBaseInfo[]): hotels.HotelBaseInfo[] {
    return hotels.sort((a, b) => {
      return a.minPricePerDay - b.minPricePerDay;
    });
  }

  public descSort(hotels: hotels.HotelBaseInfo[]): hotels.HotelBaseInfo[] {
    return hotels.sort((a, b) => {
      return b.minPricePerDay - a.minPricePerDay;
    });
  }
}
