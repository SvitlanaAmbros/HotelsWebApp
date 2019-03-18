import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';



@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
