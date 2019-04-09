import { Services } from "@angular/core/src/view";

export module hotels {

    // UI types
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
        stars: Stars; 
        rate: number; 
        minPricePerDay: number;
        days?: number; 
    }

    export interface Room {
        type: string;
        availableRooms: number;
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

    export type NutritionType = 'OB' | 'BB' | 'HB' | 'FB' | 'AI';
    export const NUTRITION_TYPES: NutritionType[] = ['OB', 'BB', 'HB', 'FB','AI'];

    export type RoomType = 'Standart' | 'Lux' | 'Apartment';
    export const ROOM_TYPES: RoomType[] = ['Standart', 'Lux',  'Apartment'];

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
        days: number;
        images: string[];
        coordLng: number;
        coordLat: number;
        site?: string;
        description: string;
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

        export interface Room {
            type: RoomType;
            availableRooms: number;
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