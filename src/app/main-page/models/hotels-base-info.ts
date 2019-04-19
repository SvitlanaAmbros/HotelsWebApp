import { hotels } from '../types/hotels';
import { HotelBaseInfo } from './hotel-base-info';

export class HotelsBaseInfo implements hotels.HotelsBaseInfo {
    hotels: hotels.HotelBaseInfo[];

    constructor(dbHotels: hotels.db.HotelsBaseInfo, days?: number) {
        this.hotels = dbHotels.hotels.map(item => new HotelBaseInfo(item, days));
    }

    public updateDaysCount(dbHotels: hotels.HotelsBaseInfo, days: number) {
        dbHotels.hotels.map((item: hotels.HotelBaseInfo) => item.setDays(days));
    }

}