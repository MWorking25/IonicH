import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss','./signin.page.less'],
})
export class SigninPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectionToUrl(path, fieldid)
  {
    if(fieldid)
    this.router.navigate([path,fieldid]);
    else
    this.router.navigate([path]);
  } 

}
