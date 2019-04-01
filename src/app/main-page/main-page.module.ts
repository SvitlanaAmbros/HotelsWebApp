import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { MainPageDetailComponent } from "./main-page-detail/main-page-detail.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ], 
    declarations: [
        MainPageDetailComponent
    ],
    exports: [
        MainPageDetailComponent
    ]
})

export class MainPageModule { 
    
}