import { Injectable } from '@angular/core';
import { hotels } from './types/hotels';

@Injectable()
export class HotelsInfoService {

  private data: hotels.db.HotelsBaseInfo = {
    hotels: 
    [
      {
        id: 1,
        title: 'Naama Bay',
        country: 'Egypt',
        city: 'Sharm-el-Sheikh',
        mainImg: 'hotel_1',
        nutritionTypes: [
          'OB', 'HB', 'AI'
        ],
        rooms: [
          {
            type: 'Standart',
            availableRooms: 2
          },
          {
            type: 'Lux',
            availableRooms: 4
          },
          {
            type: 'Apartment',
            availableRooms: 0
          }
        ],
        stars: 5,
        rate: 7.8,
        price: {
          basePrice: 100,
          nutrition: {
            'OB': 0,
            'HB': 10,
            'FB': 20,
            'BB': 30,
            'AI': 50
          },
          roomType: {
            'Standart': 0,
            'Lux': 50,
            'Apartment': 100
          }
        }
      },
      {
        id: 2,
        title: 'Sunrise Diamond Beach resort',
        country: 'Egypt',
        city: 'Sharm-el-Sheikh',
        mainImg: 'hotel_2',
        nutritionTypes: [
          'OB', 'HB', 'AI'
        ],
        rooms: [
          {
            type: 'Standart',
            availableRooms: 4
          },
          {
            type: 'Lux',
            availableRooms: 10
          },
          {
            type: 'Apartment',
            availableRooms: 2
          }
        ],
        stars: 5,
        rate: 8.2,
        price: {
          basePrice: 160,
          nutrition: {
            'OB': 0,
            'HB': 10,
            'FB': 20,
            'BB': 30,
            'AI': 50
          },
          roomType: {
            'Standart': 0,
            'Lux': 50,
            'Apartment': 100
          }
        }
      },
      {
        id: 3,
        title: 'Coral Sea Sensatory',
        country: 'Egypt',
        city: 'Sharm-el-Sheikh',
        mainImg: 'hotel_3',
        nutritionTypes: [
          'OB', 'HB', 'AI'
        ],
        rooms: [
          {
            type: 'Standart',
            availableRooms: 1
          },
          {
            type: 'Lux',
            availableRooms: 0
          },
          {
            type: 'Apartment',
            availableRooms: 0
          }
        ],
        stars: 5,
        rate: 8.9,
        price: {
          basePrice: 150,
          nutrition: {
            'OB': 0,
            'HB': 10,
            'FB': 20,
            'BB': 30,
            'AI': 50
          },
          roomType: {
            'Standart': 0,
            'Lux': 50,
            'Apartment': 100
          }
        }
      }
    ]
  }


  constructor() { }

  public getHotels(): Promise<hotels.db.HotelsBaseInfo> {
    return new Promise((res, rej) => {
      res(this.data);
    });
  }

}
