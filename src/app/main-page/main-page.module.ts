import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MainPageDetailComponent } from "./main-page-detail/main-page-detail.component";
import { CommonModule } from "@angular/common";
import { HotelsComponent } from './hotels/hotels.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelsInfoService } from "./hotels-info.service";
import { FormsModule } from "@angular/forms";
import { FilterService } from "./filter.service";
import { SortService } from "./sort.service";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ], 
    declarations: [
        MainPageDetailComponent,
        HotelsComponent,
        HotelCardComponent,
    ],
    exports: [
        MainPageDetailComponent,
    ],
    providers: [
        HotelsInfoService,
        FilterService,
        SortService
    ]
})

export class MainPageModule { 
    
}