import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children:
        [
          {
            path: 'main',
            children:
              [
                {
                  path: '',
                  loadChildren: './main/main.module#MainPageModule'
                }
              ]
          },
          {
            path: 'tours',
            children:
              [
                {
                  path: '',
                  loadChildren: './tours/tours.module#ToursPageModule'
                }
              ]
          },
          {
            path: 'offers',
            children:
              [
                {
                  path: '',
                  loadChildren: './offers/offers.module#OffersPageModule'
                }
              ]
          },
          {
            path: 'profile',
            children:
              [
                {
                  path: '',
                  loadChildren: './profile/profile.module#ProfilePageModule'
                }
              ]
          },
          {
            path: 'help',
            children:
              [
                {
                  path: '',
                  loadChildren: './help/help.module#HelpPageModule'
                }
              ]
          },
          {
            path: '',
            redirectTo: 'main',
            pathMatch: 'full'
          }
        ]
    },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
