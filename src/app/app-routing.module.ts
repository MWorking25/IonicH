import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
//------- hotels ---------
import { HotelsComponent } from './catagories/hotels/hotels.component';
import { AminitiesComponent } from './catagories/hotels/aminities/aminities.component';
import { BookingComponent } from './catagories/hotels/booking/booking.component';
import { DesricptionComponent } from './catagories/hotels/desricption/desricption.component';
import { DirectionComponent } from './catagories/hotels/direction/direction.component';
import { PhotosComponent } from './catagories/hotels/photos/photos.component';
import { ReviewsComponent } from './catagories/hotels/reviews/reviews.component';
import { RoomsComponent } from './catagories/hotels/rooms/rooms.component';
//------- experiences ---------
import { ExperiencesComponent } from './catagories/experiences/experiences.component';
import { ExperiencesDetailsComponent } from './catagories/experiences/details/details.component';
//------- buses ---------
import { BusesComponent } from './catagories/buses/buses.component';
//------- cars ---------
import { CarsComponent } from './catagories/cars/cars.component';
//------- restraurants ---------
import { RestraunrantsComponent } from './catagories/restraunrants/restraunrants.component';
//------- trains ---------
import { TrainsComponent } from './catagories/trains/trains.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'main', loadChildren: './home/main/main.module#MainPageModule' },
  { path: 'tours', loadChildren: './home/tours/tours.module#ToursPageModule' },
  { path: 'profile', loadChildren: './home/profile/profile.module#ProfilePageModule' },
  { path: 'offers', loadChildren: './home/offers/offers.module#OffersPageModule' },
  { path: 'help', loadChildren: './home/help/help.module#HelpPageModule' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotel_aminities', component: AminitiesComponent },
  { path: 'hotel_booking', component: BookingComponent },
  { path: 'hotel_description/:id', component: DesricptionComponent },
  { path: 'hotel_direction', component: DirectionComponent },
  { path: 'hotel_photos', component: PhotosComponent },
  { path: 'hotel_reviews', component: ReviewsComponent },
  { path: 'hotel_rooms', component: RoomsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'experiences_details/:id/:type', component: ExperiencesDetailsComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'restraunrants', component: RestraunrantsComponent },
  { path: 'trains', component: TrainsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
