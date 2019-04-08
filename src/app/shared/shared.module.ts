import { NgModule } from "@angular/core";
import { ImageSliderComponent } from "./components/image-slider/image-slider.component";
import { ExpandingListItemComponent } from './components/expanding-list-item/expanding-list-item.component';
import { CommonModule } from "@angular/common";
import { GoogleMapComponent } from './google-map/google-map.component';
import { IdGeneratorService } from "./services/id-generator.service";
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { FormPopupComponent } from './components/form-popup/form-popup.component';
import { PopupControlsService } from "./services/popup-controls.service";

@NgModule({
    declarations: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        GoogleMapComponent,
        BtnPrimaryComponent,
        FormPopupComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        IdGeneratorService,
        PopupControlsService
    ],
    exports: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        BtnPrimaryComponent,
        GoogleMapComponent, 
        FormPopupComponent
    ]
})

export class SharedModule { }