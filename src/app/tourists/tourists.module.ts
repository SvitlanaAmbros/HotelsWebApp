import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { TouristsDetailComponent } from './tourists-detail/tourists-detail.component';
import { TouristsQuestionsComponent } from './tourists-questions/tourists-questions.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CountriesComponent,
    CountryCardComponent,
    TouristsDetailComponent,
    TouristsQuestionsComponent
  ],
  exports: [
    TouristsDetailComponent
  ]
})

export class TouristsModule { }
