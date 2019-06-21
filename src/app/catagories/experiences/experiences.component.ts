import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExperiencesService } from '../../services/experiences.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {

  experienceResult :any;
  searchFilter:any = [];

  constructor(private _location: Location, private _ExperiencesService : ExperiencesService,private storage: Storage, private router: Router) { }

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

  hitLike(expdetails)
  {
   
       this.storage.get('memberid').then((val) => {
        if(val == null)
        {
          this.router.navigate(['/signin']);
        }
        else
        {
          this._ExperiencesService.HtLikeForExp(expdetails).subscribe(
            data => {
              this.experienceResult = data;
            })
        }
      });
   
  }

}
