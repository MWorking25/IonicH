import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  inputtype:string = 'password';
  visibilityicon:string = 'visibility';

  constructor(private router: Router,public location: Location) {}

  ngOnInit() {
        
  }

  
  showHidePassword()
  {
    if(this.inputtype == 'password')
    {
      this.inputtype = 'text';
      this.visibilityicon = 'visibility_off';
    }
    else
    {
      this.inputtype = 'password';
      this.visibilityicon = 'visibility';
    }
  }


  redirectionToUrl(path, fieldid)
  {
    if(fieldid)
    this.router.navigate([path,fieldid]);
    else
    this.router.navigate([path]);
  } 
  
  userAuthentication()
  {
    this.location.back();
  } 

}
