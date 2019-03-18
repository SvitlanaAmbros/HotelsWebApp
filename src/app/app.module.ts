import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


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
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
