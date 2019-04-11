import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppRoutingModule } from './app.routing.module';
import { AboutUsModule } from './about-us/about-us.module';
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
    FormsModule,
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
