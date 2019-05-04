import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss'],
})
export class BusesComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
