import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'main', loadChildren: './home/main/main.module#MainPageModule' },
  { path: 'tours', loadChildren: './home/tours/tours.module#ToursPageModule' },
  { path: 'profile', loadChildren: './home/profile/profile.module#ProfilePageModule' },
  { path: 'offers', loadChildren: './home/offers/offers.module#OffersPageModule' },
  { path: 'help', loadChildren: './home/help/help.module#HelpPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
