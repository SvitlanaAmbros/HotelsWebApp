import { NgModule } from "@angular/core";
import { ImageSliderComponent } from "./components/image-slider/image-slider.component";
import { ExpandingListItemComponent } from './components/expanding-list-item/expanding-list-item.component';
import { CommonModule } from "@angular/common";
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
    declarations: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        GoogleMapComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [

    ],
    exports: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        GoogleMapComponent
    ]
})

export class SharedModule { }