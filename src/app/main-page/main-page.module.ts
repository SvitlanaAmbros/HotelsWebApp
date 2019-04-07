import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MainPageDetailComponent } from "./main-page-detail/main-page-detail.component";
import { CommonModule } from "@angular/common";
import { HotelsComponent } from './hotels/hotels.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ], 
    declarations: [
        MainPageDetailComponent,
        HotelsComponent,
        HotelCardComponent,
        HotelInfoComponent
    ],
    exports: [
        MainPageDetailComponent,
        HotelInfoComponent
    ]
})

export class MainPageModule { 
    
}