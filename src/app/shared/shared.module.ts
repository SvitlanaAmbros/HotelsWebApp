import { NgModule } from "@angular/core";
import { ImageSliderComponent } from "./components/image-slider/image-slider.component";
import { ExpandingListItemComponent } from './components/expanding-list-item/expanding-list-item.component';
import { CommonModule } from "@angular/common";
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { IdGeneratorService } from "./services/id-generator.service";
import { BtnPrimaryComponent } from './components/btn-primary/btn-primary.component';
import { FormPopupComponent } from './components/form-popup/form-popup.component';
import { PopupControlsService } from "./services/popup-controls.service";
import { SearchWithTipsComponent } from './components/search-with-tips/search-with-tips.component';
import { FormsModule } from "@angular/forms";
import { ScrollService } from "./services/scroll.service";

@NgModule({
    declarations: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        GoogleMapComponent,
        BtnPrimaryComponent,
        FormPopupComponent,
        SearchWithTipsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        IdGeneratorService,
        PopupControlsService,
        ScrollService
    ],
    exports: [
        ImageSliderComponent,
        ExpandingListItemComponent,
        BtnPrimaryComponent,
        GoogleMapComponent, 
        FormPopupComponent,
        SearchWithTipsComponent
    ]
})

export class SharedModule { }