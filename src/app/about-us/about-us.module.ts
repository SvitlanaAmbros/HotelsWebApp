import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CommonModule } from '@angular/common';
import { AboutUsDetailComponent } from './about-us-detail/about-us-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutUsDetailComponent,
    ChooseUsComponent,
    OurServicesComponent,
    
  ],
  exports: [
    AboutUsDetailComponent
  ]
})

export class AboutUsModule { }
