import { Services } from "@angular/core/src/view";

export module hotels {

    // UI types
    export interface HotelsBaseInfo {
        hotels: HotelBaseInfo[];
        updateDaysCount(dbHotels: hotels.HotelsBaseInfo, days: number): void
    }

    // hotel info
    export interface HotelBaseInfo {
        id: number;
        title: string;
        country: string;
        city: string;
        mainImg: string;
        nutritionTypes: NutritionType[];
        rooms: Room[];
        stars: Stars; 
        rate: number; 
        minPricePerDay: number;
        priceForRoomType?: number;
        price: Price;
        days?: number; 
        setDays(days: number): void;
    }
    
    export interface Room {
        type: RoomType;
        roomsCount: number;
        bookedRooms: BookedRoom[];
    }

    export interface RoomInfo {
        type: RoomType;
        priceForType: number;
        roomsCount: number;
        bookedRooms: BookedRoom[];
        hasEmptyRooms: boolean;
    }

    export interface BookedRoom {
        date: string;
        count: number;
    }

    export interface Price {
        // price in dollars
        basePrice: number;
        nutrition: PriceForNutritionType;
        roomType: PriceForRoomType;
    }

    
    //type for additional price in different types rooms or nutrition
    export type PriceForNutritionType = {
        [type in NutritionType]: number;
    };

    export type PriceForRoomType = {
        [type in RoomType]: number;
    };

    export type Stars = 1| 2 | 3 | 4 | 5;
    export const HOTEL__STARS: Stars[] = [1, 2, 3, 4, 5];

    export type NutritionType = 'BB' | 'HB' | 'AI';
    export const NUTRITION_TYPES: NutritionType[] = [ 'BB', 'HB','AI'];

    export type RoomType = 'Standard' | 'Lux' | 'Apartment';
    export const ROOM_TYPES: RoomType[] = ['Standard', 'Lux',  'Apartment'];

    export type RoomTypeFilter = 'Standard' | 'Lux' | 'Apartment' | 'All';
    export const ROOM_TYPES_FOR_FILTER: RoomTypeFilter[] = ['All', 'Standard', 'Lux',  'Apartment'];

    export type SortType = 'None' | 'Asc' |'Desc';
    export const SORT_TYPES:SortType[] = ['None', 'Asc', 'Desc'];

    export interface CurrentHotelInfo {
        id: number;
        title: string;
        country: string;
        city: string;
        mainImg: string;
        nutrition: NutritionTypePrice[];
        rooms: RoomInfo[];
        stars: Stars;
        rate: number;
        startDate: Date;
        basePrice: number;
        price: Price;
        priceForRoomType: number;
        priceForNutritionType: number;
        days: number;
        images: string[];
        coordLng: number;
        coordLat: number;
        site?: string;
        description: string;
    }

    export interface hotelsSearchParams {
        country: string;
        city: string;
        date: Date;
        days: number;
        sortType: SortType;
        stars?: Stars;
        roomType?: RoomTypeFilter;
    }

    export interface NutritionTypePrice {
        type: NutritionType;
        price: number;
    }


    //db types
    export module db {
        // list hotels
        export interface HotelsBaseInfo {
            hotels: HotelBaseInfo[];
        }

        // hotel info
        export interface HotelBaseInfo {
            id: number;
            title: string;
            country: string;
            city: string;
            mainImg: string;
            nutritionTypes: NutritionType[];
            rooms: Room[];
            stars: Stars;   //4*, 5*
            rate: number; // user rate 9,5 etc
            price: Price;
        }



        // expanded hotel info for hotel popup
        export interface CurrentHotelInfo {
            id: number;
            title: string;
            country: string;
            city: string;
            mainImg: string;
            nutritionTypes: NutritionType[];
            rooms: Room[];
            stars: Stars;
            rate: number;
            price: Price;
            images: string[];
            coord: Coord;
            site?: string;
            description: string;
            services?: HotelServices;
        }

        export interface Coord {
            lng: number;
            lat: number;
        }

        export interface HotelServices {
            
        }



    }  
}