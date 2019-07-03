import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ExperiencesService } from '../../services/experiences.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {

  experienceResult :any;
  searchFilter:any = [];

  constructor(private _location: Location, private _ExperiencesService : ExperiencesService,private storage: Storage, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    // this.storage.remove('prevUrl');
    this.storage.get('memberdetails').then((val) => {
      if(val != null)
      {
        this.searchFilter.push({memberdetails:val.id});
      }
      else
      {
        this.searchFilter.push({memberdetails:0});
      }
      this.getExperiencesList();
    });

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

 

  redirectionToUrl(path, fieldid,extrafield)
  {
    if(fieldid || fieldid != null)
    {
      if(extrafield)
      {
        this.router.navigate([path,fieldid,extrafield]);
      }
      else
      this.router.navigate([path,fieldid]);
    }
    else
    this.router.navigate([path]);
  } 

  backClicked() {
    this._location.back();
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
      expdetails.explikebymember == 1?expdetails.explikebymember = 0:expdetails.explikebymember = 1;
       this.storage.get('memberdetails').then((val) => {
        if(val == null)
        {
          this.storage.set('prevUrl',this.router.url)
          this.router.navigate(['/signin']);
        }
        else
        {
          this.storage.get('memberdetails').then((val) => {
            if(val != null)
            {
           this._ExperiencesService.HtLikeForExp({exp:expdetails,member:val}).subscribe(
            data => {
              
            })
          }
          });
        }
      });
   
  }

  RedirectToDetails(expDetails)
  {
    this.redirectionToUrl('experiences_details',expDetails.id,expDetails.exp_type);
  }

}
