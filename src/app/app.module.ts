import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ChooseUsComponent } from './about-us/choose-us/choose-us.component';
import { OurServicesComponent } from './about-us/our-services/our-services.component';
import { AboutUsDetailComponent } from './about-us/about-us-detail/about-us-detail.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { TouristsDetailComponent } from './tourists/tourists-detail/tourists-detail.component';
import { TouristsQuestionsComponent } from './tourists/tourists-questions/tourists-questions.component';
import { AppRoutingModule } from './app.routing.module';
import { MainPageDetailComponent } from './main-page/main-page-detail/main-page-detail.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CountriesComponent } from './tourists/countries/countries.component';
import { CountryCardComponent } from './tourists/country-card/country-card.component';
import { ContactsModule } from './contacts/contacts.module';
import { FooterComponent } from './footer/footer.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { MainPageModule } from './main-page/main-page.module';
import { TouristsModule } from './tourists/tourists.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    Ng2PageScrollModule,
    ScrollToModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    MainPageModule,
    AboutUsModule,
    TouristsModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
