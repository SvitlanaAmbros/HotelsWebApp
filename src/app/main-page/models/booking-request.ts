import { hotels } from "../types/hotels";

export class BookingRequest implements hotels.BookingRequest {
    hotelId: number;
    roomType: hotels.RoomType;
    date: string;

    constructor(id: number, type: hotels.RoomType, date: string) {
        this.hotelId = id;
        this.roomType = type;
        this.date = date;
    }

    public getDbObject(): hotels.db.BookingRequest {
        return {
            hotelId: this.hotelId,
            roomType: this.roomType,
            date: this.date,
        }
    }
}