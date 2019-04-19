import { hotels } from "../types/hotels";

export class RoomInfo implements hotels.RoomInfo {
    type: hotels.RoomType;
    priceForType: number;
    roomsCount: number;
    bookedRooms: hotels.BookedRoom[];
    hasEmptyRooms: boolean;

    constructor(dbCurrentHotel: hotels.db.CurrentHotelInfo, dbRoom: hotels.Room, date: Date, days: number) {
        this.setRoonInfoFromDbObj(dbCurrentHotel, dbRoom);
        this.hasEmptyRooms = this.checkEmptyRooms(date, days);
    }

    private setRoonInfoFromDbObj(dbCurrentHotel: hotels.db.CurrentHotelInfo, dbRoom: hotels.Room) {
        this.type = dbRoom.type;
        this.roomsCount = dbRoom.roomsCount;
        this.priceForType = dbCurrentHotel.price.roomType[dbRoom.type];
        this.bookedRooms = dbRoom.bookedRooms;
    }

    private checkEmptyRooms(date: Date, days: number) {
        //check free rooms
        let roomIsFound = true;
        for (let room of this.bookedRooms) {
          let roomDate = new Date(room.date);
          let userDate = new Date(date);
          for (let day = 0; day < days; day++) {
            if (roomDate.getTime() == userDate.getTime()) {
              if (room.count >= this.roomsCount) {
                roomIsFound = false;
              }
            }
    
            userDate.setDate(userDate.getDate() + 1);
          }
    
          if (!roomIsFound) {
            break;
          }
        }

        return roomIsFound;
    }

}