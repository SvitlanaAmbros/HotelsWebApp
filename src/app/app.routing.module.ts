import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageDetailComponent } from './main-page/main-page-detail/main-page-detail.component';
import { AboutUsDetailComponent } from './about-us/about-us-detail/about-us-detail.component';
import { TouristsDetailComponent } from './tourists/tourists-detail/tourists-detail.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-page',
        pathMatch: 'full'
    },
    {
        path: 'main-page',
        component: MainPageDetailComponent,
        children: [
            // {
            //     path: 'hotel',
            //     component: HotelInfoComponent
            // }
        ]
    },
    {
        path: 'about-us',
        component: AboutUsDetailComponent,
        children: [
            {
                path: 'choose-us',
                component: AboutUsDetailComponent
            },
            {
                path: 'services',
                component: AboutUsDetailComponent
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