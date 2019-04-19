import { hotels } from "../types/hotels";

export class CurrentHotelInfo implements hotels.CurrentHotelInfo {
    id: number;
    title: string;
    country: string;
    city: string;
    mainImg: string;
    nutrition: hotels.NutritionTypePrice[];
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
        this.nutrition = this.getNutritionTypes(dbCurrentHotel);
        console.log('@', this.nutrition);
        this.rooms = this.getRooms(dbCurrentHotel);
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

    private getNutritionTypes(dbCurrentHotel: hotels.db.CurrentHotelInfo):hotels.NutritionTypePrice[] {
        return dbCurrentHotel.nutritionTypes.map((item : hotels.NutritionType) => {
            console.log(item, 'price ', dbCurrentHotel.price.nutrition);
            return {
                type: item,
                price: dbCurrentHotel.price.nutrition[item]
            }
        });
    }

    private getRooms(dbCurrentHotel: hotels.db.CurrentHotelInfo): hotels.RoomInfo[] {
        return dbCurrentHotel.rooms.map((item: hotels.Room) => {
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