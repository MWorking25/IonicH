import { Component, OnInit, Input, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ExperiencesService } from '../../../services/experiences.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class ExperiencesDetailsComponent implements OnInit {


  experienceDetails:any = [{bannerinage:''}];
  expid;
  exptype;
  experienceServicesDetails:any = [];
  expFilters:any = [];
  showToolbar = false;
  constructor(private _location: Location, private _ExperiencesService : ExperiencesService,private storage: Storage, private router: Router,private route: ActivatedRoute, public toastController: ToastController,public element: ElementRef, public renderer: Renderer) { }

  ngOnInit() {


    this.expid = this.route.snapshot.paramMap.get("id");
    this.exptype = this.route.snapshot.paramMap.get("type");

    this.storage.get('memberdetails').then((val) => {
      if(val != null)
      {
        this.expFilters.push({memberdetails:val.id});
      }
      else
      {
        this.expFilters.push({memberdetails:0});
      }
      this.expFilters[0].expid = parseInt(this.expid);
      this.expFilters[0].exptype =this.exptype;

      this.getExperienceDetails();
    });
    
  }


  getExperienceDetails()
  {
    this._ExperiencesService.getExperienceDetails(this.expFilters).subscribe(
      data => {
        if(data.length > 0)
          {
            this.experienceDetails = data;
            this.getExpServices(this.expid,this.exptype);
          }
      })
  }


  getExpServices(expid,exptype)
  {
    this._ExperiencesService.getExpServices(expid,exptype).subscribe(
      data => {
        if(data.length > 0)
          {
            this.experienceServicesDetails = data;
            console.log(this.experienceServicesDetails)
            this.getExpTimeSlots(this.expid,this.exptype);
          }
      })
  }

  getExpTimeSlots(expid,exptype)
  {

  }

  redirectionToUrl(path, fieldid)
  {
    if(fieldid || fieldid != null)
    this.router.navigate([path,fieldid]);
    else
    this.router.navigate([path]);
  } 

  onScroll($event: CustomEvent<ScrollDetail>) {
     if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 100; 
    } 
  }
}

