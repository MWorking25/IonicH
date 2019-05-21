import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  birthday = new Date();
  anniversary = new Date();

  constructor() { }

  ngOnInit() {
  }



}
