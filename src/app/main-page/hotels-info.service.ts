import { Injectable } from '@angular/core';
import { hotels } from './types/hotels';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelsInfoService {
  private URL: string = 'http://localhost:8080/';

  // private data: hotels.db.HotelsBaseInfo = {
    // hotels: 
    // [
    //   {
    //     id: 1,
    //     title: 'Naama Bay',
    //     country: 'Egypt',
    //     city: 'Sharm-el-Sheikh',
    //     mainImg: 'hotel_1',
    //     nutritionTypes: [
    //       'HB', 'AI'
    //     ],
    //     rooms: [
    //       {
    //         type: 'Standard',
    //         roomsCount: 8,
    //         bookedRooms: [
    //             {
    //               date: '2019-05-13',
    //               count: 2
    //             }
    //         ]
    //       },
    //       {
    //         type: 'Lux',
    //         roomsCount: 8,
    //         bookedRooms: [
    //             {
    //               date: '2019-05-13',
    //               count: 2
    //             }
    //         ]
    //       },
    //       {
    //         type: 'Apartment',
    //         roomsCount: 8,
    //         bookedRooms: [
    //             {
    //               date: '2019-05-13',
    //               count: 3
    //             }
    //         ]
    //       }
    //     ],
    //     stars: 5,
    //     rate: 7.8,
    //     price: {
    //       basePrice: 125,
    //       nutrition: {
    //         'BB': 0,
    //         'HB': 10,
    //         'AI': 50
    //       },
    //       roomType: {
    //         'Standard': 0,
    //         'Lux': 50,
    //         'Apartment': 100
    //       }
    //     }
    //   },
    //   {
    //     id: 2,
    //     title: 'Sunrise Diamond Beach resort',
    //     country: 'Egypt',
    //     city: 'Sharm-el-Sheikh',
    //     mainImg: 'hotel_2',
    //     nutritionTypes: [
    //       'HB', 'AI'
    //     ],
    //     rooms: [
    //       {
    //         type: 'Standard',
    //         roomsCount: 8,
    //         bookedRooms: [
    //             {
    //               date: '2019-05-13',
    //               count: 2
    //             }
    //         ]
    //       },
    //       {
    //         type: 'Lux',
    //         roomsCount: 8,
    //         bookedRooms: [
    //             {
    //               date: '2019-05-13',
    //               count: 2
    //             }
    //         ]
    //       }
    //     ],
    //     stars: 4,
    //     rate: 8.2,
    //     price: {
    //       basePrice: 160,
    //       nutrition: {
    //         'HB': 10,
    //         'BB': 0,
    //         'AI': 50
    //       },
    //       roomType: {
    //         'Standard': 0,
    //         'Lux': 50,
    //         'Apartment': 100
    //       }
    //     }
    //   },
      // {
      //   id: 3,
      //   title: 'Coral Sea Sensatory',
      //   country: 'Egypt',
      //   city: 'Sharm-el-Sheikh',
      //   mainImg: 'hotel_3',
      //   nutritionTypes: [
      //     'HB', 'AI'
      //   ],
      //   rooms: [
      //     {
      //       type: 'Standard',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     },
      //     {
      //       type: 'Lux',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     }
      //   ],
      //   stars: 5,
      //   rate: 8.9,
      //   price: {
      //     basePrice: 150,
      //     nutrition: {
      //       'HB': 10,
      //       'BB': 0,
      //       'AI': 50
      //     },
      //     roomType: {
      //       'Standard': 0,
      //       'Lux': 50,
      //       'Apartment': 100
      //     }
      //   }
      // },
      // {
      //   id: 4,
      //   title: 'Naama Bay',
      //   country: 'Egypt',
      //   city: 'Kair',
      //   mainImg: 'hotel_1',
      //   nutritionTypes: [
      //     'HB', 'AI'
      //   ],
      //   rooms: [
      //     {
      //       type: 'Standard',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-05-17',
      //             count: 2
      //           },
      //           {
      //             date: '2019-05-18',
      //             count: 8
      //           }
      //       ]
      //     }
          
      //   ],
      //   stars: 5,
      //   rate: 7.8,
      //   price: {
      //     basePrice: 140,
      //     nutrition: {
      //       'HB': 10,
      //       'BB': 0,
      //       'AI': 50
      //     },
      //     roomType: {
      //       'Standard': 0,
      //       'Lux': 50,
      //       'Apartment': 100
      //     }
      //   }
      // },
      // {
      //   id: 5,
      //   title: 'Naama Bay',
      //   country: 'Egypt',
      //   city: 'Kair',
      //   mainImg: 'hotel_1',
      //   nutritionTypes: [
      //     'HB', 'AI'
      //   ],
      //   rooms: [
      //     {
      //       type: 'Standard',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-05-19',
      //             count: 2
      //           },
      //           {
      //             date: '2019-05-18',
      //             count: 8
      //           },
      //           {
      //             date: '2019-05-20',
      //             count: 2
      //           }
      //       ]
      //     }
      //   ],
      //   stars: 5,
      //   rate: 7.8,
      //   price: {
      //     basePrice: 180,
      //     nutrition: {
      //       'HB': 10,
      //       'BB': 0,
      //       'AI': 50
      //     },
      //     roomType: {
      //       'Standard': 0,
      //       'Lux': 50,
      //       'Apartment': 100
      //     }
      //   }
      // },
      // {
      //   id: 6,
      //   title: 'Naama Bay',
      //   country: 'Egypt',
      //   city: 'Sharm-el-Sheikh',
      //   mainImg: 'hotel_1',
      //   nutritionTypes: [
      //     'HB', 'AI'
      //   ],
      //   rooms: [
      //     {
      //       type: 'Standard',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     }
      //   ],
      //   stars: 5,
      //   rate: 7.8,
      //   price: {
      //     basePrice: 110,
      //     nutrition: {
      //       'HB': 10,
      //       'BB': 0,
      //       'AI': 50
      //     },
      //     roomType: {
      //       'Standard': 0,
      //       'Lux': 50,
      //       'Apartment': 100
      //     }
      //   }
      // },
      // {
      //   id: 7,
      //   title: 'Naama Bay',
      //   country: 'Egypt',
      //   city: 'Sharm-el-Sheikh',
      //   mainImg: 'hotel_1',
      //   nutritionTypes: [
      //     'HB', 'AI'
      //   ],
      //   rooms: [
      //     {
      //       type: 'Standard',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     },
      //     {
      //       type: 'Apartment',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     }
      //   ],
      //   stars: 3,
      //   rate: 7.8,
      //   price: {
      //     basePrice: 100,
      //     nutrition: {
      //       'HB': 10,
      //       'BB': 0,
      //       'AI': 50
      //     },
      //     roomType: {
      //       'Standard': 0,
      //       'Lux': 50,
      //       'Apartment': 100
      //     }
      //   }
      // },
      // {
      //   id: 8,
      //   title: 'Naama Bay',
      //   country: 'Egypt',
      //   city: 'Sharm-el-Sheikh',
      //   mainImg: 'hotel_1',
      //   nutritionTypes: [
      //     'BB', 'HB', 'AI'
      //   ],
      //   rooms: [
      //     {
      //       type: 'Standard',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     },
      //     {
      //       type: 'Lux',
      //       roomsCount: 8,
      //       bookedRooms: [
      //           {
      //             date: '2019-04-13',
      //             count: 2
      //           }
      //       ]
      //     }
      //   ],
      //   stars: 5,
      //   rate: 7.8,
      //   price: {
      //     basePrice: 100,
      //     nutrition: {
      //       'HB': 10,
      //       'BB': 0,
      //       'AI': 50
      //     },
      //     roomType: {
      //       'Standard': 0,
      //       'Lux': 50,
      //       'Apartment': 100
      //     }
      //   }
      // }
    // ]
  // }

  // private hotel: hotels.db.CurrentHotelInfo = 
  // {
  //   id: 1,
  //   title: 'Naama Bay',
  //   country: 'Egypt',
  //   city: 'Sharm-el-Sheikh',
  //   mainImg: 'hotel_1',
  //   nutritionTypes: [
  //     'BB', 'HB', 'AI'
  //   ],
  //   rooms: [
  //     // {
  //     //   type: 'Standard',
  //     //   roomsCount: 8,
  //     //   bookedRooms: [
  //     //       {
  //     //         date: '2019-05-13',
  //     //         count: 2
  //     //       }
  //     //   ]
  //     // },
  //     {
  //       type: 'Lux',
  //       roomsCount: 8,
  //       bookedRooms: [
  //           {
  //             date: '2019-05-13',
  //             count: 8
  //           }
  //       ]
  //     },
  //     {
  //       type: 'Apartment',
  //       roomsCount: 8,
  //       bookedRooms: [
  //           {
  //             date: '2019-05-13',
  //             count: 3
  //           }
  //       ]
  //     }
  //   ],
  //   stars: 5,
  //   rate: 7.8,
  //   price: {
  //     basePrice: 125,
  //     nutrition: {
  //       'BB': 0,
  //       'HB': 20,
  //       'AI': 50
  //     },
  //     roomType: {
  //       'Standard': 0,
  //       'Lux': 50,
  //       'Apartment': 80
  //     }
  //   },
  //   images: [
  //     'room_1',
  //     'room_2',
  //     'room_3',
  //     'room_4'
  //   ],
  //   coord: {
  //     lat: 27.975679,
  //     lng: 34.422927
  //   },
  //   site: 'coralsearesorts.com',
  //   description: `The hotel has a beautiful green area, 
  //   a convenient sandy entrance to the sea, a large playground. 
  //   Recommended for a relaxing family holiday with children. 
  //   Opened in 1994, the last renovation was held in 2011.
  //    The hotel consists of two 3-storey buildings and one 2-storey 
  //    building. 15 km from the airport of Hurghada, 20 km from Hurghada.`
  // }


  constructor(private http: HttpClient) { }

  public getHotels(): Promise<hotels.db.HotelsBaseInfo> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.URL}hotels`)
        .subscribe((res: hotels.db.HotelsBaseInfo) => {
          // console.log('Hotels from server', res);
          resolve(res);
        }, (err) => {
          reject('Can`t get hotels info');
        });
    });
  }

  public getCurrentHotelInfo(hotelId: number): Promise<hotels.db.CurrentHotelInfo> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.URL}hotels/${hotelId}`)
        .subscribe((res: hotels.db.CurrentHotelInfo) => {
          // console.log('Current hotel info', res);
          resolve(res);
        }, (err) => {
          reject('Can`t get current hotel info');
        });
    });
  }

  public getCountryCityInfo(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.URL}info`)
        .subscribe((res) => {
          // console.log('Current hotel info', res);
          resolve(res);
        }, (err) => {
          reject('Can`t get current hotel info');
        });
    });
  }

  public orderHotelRoom(bookingRequest: hotels.db.BookingRequest) {
    console.log('BOOKING', bookingRequest);
    return new Promise((resolve, reject) => {
      this.http.post(`${this.URL}book`, bookingRequest)
        .subscribe(res => {
          resolve('Succesfull order. Our manager will keep in touch with you!');
        }, (err) => {
          reject(err);
        });
    });
  }



}
