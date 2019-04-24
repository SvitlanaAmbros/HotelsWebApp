import { hotels } from "../types/hotels";
import { DatePipe } from "@angular/common";

export class BookingRequest implements hotels.BookingRequest {
    hotelId: number;
    roomType: hotels.RoomType;
    date: string;
    days?: number;
    userInfo?: hotels.UserInfo;

    constructor(currentHotel: hotels.CurrentHotelInfo, userInfo: hotels.UserInfo) {
        this.hotelId = currentHotel.id;
        
        // this.hotelId = id;
        this.roomType = this.getRoomTypeByChoosingAddPrice(currentHotel.price, currentHotel.priceForRoomType);
        this.date = this.getStringFromDate(currentHotel.startDate);
        this.days = currentHotel.days;
        this.userInfo = userInfo; 
    }

    private getRoomTypeByChoosingAddPrice(prices: hotels.Price, price: number):any {
        return Object.keys(prices.roomType).find(key => prices.roomType[key] == price);

    }

    private getStringFromDate(date: Date):string {
        var datePipe = new DatePipe('en-US');
        return  datePipe.transform(date, 'yyyy-MM-dd');
    }

    public getDbObject(): hotels.db.BookingRequest {
        return {
            hotelId: this.hotelId,
            roomType: this.roomType,
            date: this.date,
        }
    }
}