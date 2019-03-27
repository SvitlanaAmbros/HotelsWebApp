import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ContactsDetailComponent, ContactCardComponent]
})
export class ContactsModule { }
