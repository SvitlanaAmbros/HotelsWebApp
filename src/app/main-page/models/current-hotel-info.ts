import { hotels } from "../types/hotels";

export class CurrentHotelInfo implements hotels.CurrentHotelInfo {
    id: number;
    title: string;
    country: string;
    city: string;
    mainImg: string;
    nutritionTypes: hotels.NutritionType[];
    rooms: hotels.Room[];
    stars: hotels.Stars;
    rate: number;
    days: number;

    price: hotels.Price;
    images: string[];
    coordLng: number;
    coordLat: number;
    site?: string;
    description: string;

    constructor(dbCurrentHotel: hotels.db.CurrentHotelInfo, days: number) {
        this.setInfoFromDbObj(dbCurrentHotel);
        this.days = days;
    }

    private setInfoFromDbObj(dbCurrentHotel: hotels.db.CurrentHotelInfo):void {
        this.id = dbCurrentHotel.id;
        this.title = dbCurrentHotel.title;
        this.country = dbCurrentHotel.country;
        this.city = dbCurrentHotel.city;
        this.mainImg = dbCurrentHotel.mainImg;
        this.nutritionTypes = this.getNutritionTypes(dbCurrentHotel.nutritionTypes);
        this.rooms = this.getRooms(dbCurrentHotel.rooms);
        this.stars = dbCurrentHotel.stars;
        this.rate = dbCurrentHotel.rate;
        this.price = dbCurrentHotel.price;
        this.images = dbCurrentHotel.images;
        this.coordLng = dbCurrentHotel.coord.lng;
        this.coordLat = dbCurrentHotel.coord.lat;
        this.site = this.getSite(dbCurrentHotel);
        this.description = dbCurrentHotel.description;
    }

    private getNutritionTypes(dbNutritionTypes: hotels.NutritionType[]):hotels.NutritionType[] {
        return dbNutritionTypes;
    }

    private getRooms(dbRooms: hotels.Room[]): hotels.Room[] {
        return dbRooms;
    }

    private getSite(dbCurrentHotel: hotels.db.CurrentHotelInfo):string {
        if (!!dbCurrentHotel.site) {
            return dbCurrentHotel.site;
        }
    }
}