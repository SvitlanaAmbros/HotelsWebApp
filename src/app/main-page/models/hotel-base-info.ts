import { hotels } from '../types/hotels';

export class HotelBaseInfo implements hotels.HotelBaseInfo {
    id: number;
    title: string;
    country: string;
    city: string;
    mainImg: string;
    nutritionTypes: hotels.NutritionType[];
    rooms: hotels.Room[];
    stars: hotels.Stars; 
    rate: number; 
    minPricePerDay: number;
    // price: hotels.Price;
    days?: number; 

    constructor(dbHotelBaseInfo: hotels.db.HotelBaseInfo, days:number) {
        this.days = days;
        this.setInfoFromDbObj(dbHotelBaseInfo); 
    }

    private setInfoFromDbObj(dbHotelBaseInfo: hotels.db.HotelBaseInfo):void {
        this.id = dbHotelBaseInfo.id;
        this.title = dbHotelBaseInfo.title;
        this.country = dbHotelBaseInfo.country;
        this.city = dbHotelBaseInfo.city;
        this.mainImg = dbHotelBaseInfo.mainImg;
        this.nutritionTypes = this.getNutritionTypes(dbHotelBaseInfo.nutritionTypes);
        this.rooms = this.getRooms(dbHotelBaseInfo.rooms);
        this.stars = dbHotelBaseInfo.stars;
        this.rate = dbHotelBaseInfo.rate;
        this.minPricePerDay = this.getMinPricePerDay(dbHotelBaseInfo.price);
        this.price = dbHotelBaseInfo.price;
    }

    private getNutritionTypes(dbNutritionTypes: hotels.NutritionType[]):hotels.NutritionType[] {
        return dbNutritionTypes;
    }

    private getRooms(dbRooms: hotels.Room[]): hotels.Room[] {
        return dbRooms;
    }

    private getMinPricePerDay(dbHotelPrice: hotels.Price):number  {
        return dbHotelPrice.basePrice;
    }

    public setDays(days: number):void {
        this.days = days;
    }
}