import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }

}
