import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-restraunrants',
  templateUrl: './restraunrants.component.html',
  styleUrls: ['./restraunrants.component.scss'],
})
export class RestraunrantsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }

}
