import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageDetailComponent } from './main-page/main-page-detail/main-page-detail.component';
import { AboutUsDetailComponent } from './about-us/about-us-detail/about-us-detail.component';
import { TouristsDetailComponent } from './tourists/tourists-detail/tourists-detail.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ChooseUsComponent } from './about-us/choose-us/choose-us.component';
import { OurServicesComponent } from './about-us/our-services/our-services.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-page',
        pathMatch: 'full'
    },
    {
        path: 'main-page',
        component: MainPageDetailComponent
    },
    {
        path: 'about-us',
        component: AboutUsDetailComponent,
        children: [
            {
                path: 'choose-us',
                component: ChooseUsComponent
            },
            {
                path: 'services',
                component: OurServicesComponent
            }
        ]
    },
    {
        path: 'for-tourists',
        component: TouristsDetailComponent,
        children: [
            {
                path: 'questions',
                component: TouristsDetailComponent
            },
            {
                path: 'countries',
                component: TouristsDetailComponent
            }
        ]
    },
    {
        path: 'contacts',
        component: ContactsDetailComponent
    },
    {
        path: '**',
        component: MainPageDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}