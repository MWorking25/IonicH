import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExperiencesService } from '../../services/experiences.service';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {

  experienceResult :any;
  searchFilter:any = [];

  constructor(private _location: Location, private _ExperiencesService : ExperiencesService) { }

  ngOnInit() {
    this.getExperiencesList();
  }

  getExperiencesList()
  {
    this._ExperiencesService.getExperiencesList(this.searchFilter).subscribe(
      data => {
        this.experienceResult = data;
      })
  }

}
