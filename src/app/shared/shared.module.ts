import { NgModule } from "@angular/core";
import { ImageSliderComponent } from "./components/image-slider/image-slider.component";
import { ExpandingListItemComponent } from './components/expanding-list-item/expanding-list-item.component';
import { CommonModule } from "@angular/common";
import { GoogleMapComponent } from './google-map/google-map.component';
import { IdGeneratorService } from "./services/id-generator.service";
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';

@NgModule({
    declarations: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        GoogleMapComponent,
        BtnPrimaryComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        IdGeneratorService
    ],
    exports: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        BtnPrimaryComponent,
        GoogleMapComponent
    ]
})

export class SharedModule { }