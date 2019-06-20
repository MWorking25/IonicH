import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { AppGlobals } from './services/credencials';

//------- hotels ---------
import { ListComponent } from './catagories/hotels/list/list.component';
import { HotelsComponent } from './catagories/hotels/hotels.component';
import { AminitiesComponent } from './catagories/hotels/aminities/aminities.component';
import { BookingComponent } from './catagories/hotels/booking/booking.component';
import { DesricptionComponent } from './catagories/hotels/desricption/desricption.component';
import { DirectionComponent } from './catagories/hotels/direction/direction.component';
import { PhotosComponent } from './catagories/hotels/photos/photos.component';
import { ReviewsComponent } from './catagories/hotels/reviews/reviews.component';
import { RoomsComponent } from './catagories/hotels/rooms/rooms.component';
import { SearchModelComponent } from './catagories/hotels/search-model/search-model.component';
import { GuestsComponent } from './catagories/hotels/guests/guests.component';
//------- experiences ---------
import { ExperiencesComponent } from './catagories/experiences/experiences.component';
//------- buses ---------
import { BusesComponent } from './catagories/buses/buses.component';
//------- cars ---------
import { CarsComponent } from './catagories/cars/cars.component';
//------- restraurants ---------
import { RestraunrantsComponent } from './catagories/restraunrants/restraunrants.component';
//------- trains ---------
import { TrainsComponent } from './catagories/trains/trains.component';


@NgModule({
  declarations: [AppComponent, ForgotpasswordComponent, HotelsComponent,
    AminitiesComponent,
    BookingComponent,
    ListComponent,
    DesricptionComponent,
    DirectionComponent,
    PhotosComponent,
    ReviewsComponent,
    RoomsComponent,
    SearchModelComponent,
    GuestsComponent,
    ExperiencesComponent,
    BusesComponent,
    CarsComponent,
    RestraunrantsComponent,
    TrainsComponent],
  entryComponents: [
    SearchModelComponent,
    GuestsComponent,
    AminitiesComponent,
    BookingComponent,
    ListComponent,
    DesricptionComponent,
    DirectionComponent,
    PhotosComponent,
    ReviewsComponent,
    RoomsComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,HttpClientModule],
  providers: [
    AppGlobals,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
