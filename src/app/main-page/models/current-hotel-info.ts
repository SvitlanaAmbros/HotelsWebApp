import { hotels } from "../types/hotels";

export class CurrentHotelInfo implements hotels.CurrentHotelInfo {
    id: number;
    title: string;
    country: string;
    city: string;
    mainImg: string;
    nutritionTypes: hotels.NutritionType[];
    rooms: hotels.RoomInfo[];
    stars: hotels.Stars;
    rate: number;
    days: number;
    startDate: Date;
    basePrice: number;
    price: hotels.Price;
    priceForRoomType: number;
    priceForNutritionType: number;
    images: string[];
    coordLng: number;
    coordLat: number;
    site?: string;
    description: string;

    constructor(dbCurrentHotel: hotels.db.CurrentHotelInfo, days: number, date: Date) {
        this.setInfoFromDbObj(dbCurrentHotel);
        this.days = days;
        this.startDate = date;
    }

    private setInfoFromDbObj(dbCurrentHotel: hotels.db.CurrentHotelInfo):void {
        this.id = dbCurrentHotel.id;
        this.title = dbCurrentHotel.title;
        this.country = dbCurrentHotel.country;
        this.city = dbCurrentHotel.city;
        this.mainImg = dbCurrentHotel.mainImg;
        this.nutritionTypes = this.getNutritionTypes(dbCurrentHotel.nutritionTypes);
        this.rooms = this.getRooms(dbCurrentHotel);
        console.log('!!!!!!', this.rooms);
        this.stars = dbCurrentHotel.stars;
        this.rate = dbCurrentHotel.rate;
        this.images = dbCurrentHotel.images;
        this.coordLng = dbCurrentHotel.coord.lng;
        this.coordLat = dbCurrentHotel.coord.lat;
        this.site = this.getSite(dbCurrentHotel);
        this.description = dbCurrentHotel.description;
        this.price = dbCurrentHotel.price;
        this.priceForRoomType = 0;
        this.priceForNutritionType = 0;
        this.basePrice = dbCurrentHotel.price.basePrice;
    }

    private getNutritionTypes(dbNutritionTypes: hotels.NutritionType[]):hotels.NutritionType[] {
        return dbNutritionTypes;
    }

    private getRooms(dbCurrentHotel: hotels.db.CurrentHotelInfo): hotels.RoomInfo[] {
        return this.rooms =  dbCurrentHotel.rooms.map((item:hotels.Room) => {
                return {
                    type: item.type,
                    roomsCount: item.roomsCount,
                    priceForType: dbCurrentHotel.price.roomType[item.type],
                    bookedRooms: item.bookedRooms
                }
            });
    }

    private getSite(dbCurrentHotel: hotels.db.CurrentHotelInfo):string {
        if (!!dbCurrentHotel.site) {
            return dbCurrentHotel.site;
        }
    }
}