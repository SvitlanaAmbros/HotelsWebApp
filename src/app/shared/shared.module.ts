import { NgModule } from "@angular/core";
import { ImageSliderComponent } from "./components/image-slider/image-slider.component";
import { ExpandingListItemComponent } from './components/expanding-list-item/expanding-list-item.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ImageSliderComponent,
        ExpandingListItemComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [

    ],
    exports: [
        ImageSliderComponent,
        ExpandingListItemComponent
    ]
})

export class SharedModule { }