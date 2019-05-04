import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }
}
