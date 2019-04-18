import { hotels } from '../types/hotels';
import { HotelBaseInfo } from './hotel-base-info';

export class HotelsBaseInfo implements hotels.HotelsBaseInfo {
    hotels: hotels.HotelBaseInfo[];

    constructor(dbHotels: hotels.db.HotelsBaseInfo, days?: number) {
        this.hotels = dbHotels.hotels.map(item => new HotelBaseInfo(item, days));

        console.log('Hotels ui', this.hotels);
    }

    public updateDaysCount(dbHotels: hotels.HotelsBaseInfo, days: number) {
        console.log("hotels class", days);
        dbHotels.hotels.map((item: hotels.HotelBaseInfo) => item.setDays(days));
    }

}