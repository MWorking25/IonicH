import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.scss'],
})
export class TrainsComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }

}
