import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DesricptionComponent } from '../desricption/desricption.component';
import { HotelsService } from '../../../services/hotels.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() searchFilter:Object;

  seachResult:any;

  constructor(public modalController: ModalController, public toastController: ToastController,private router: Router, public _HotelsService: HotelsService) { }

  

  ngOnInit() {
    this.getHotelsList();
  }

  async myDismiss() {
    await this.modalController.dismiss({});
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

  getHotelsList()
  {
    this._HotelsService.getHotelsList(this.searchFilter).subscribe(
      data => {
        this.seachResult = data;
      });
  }


  async getHotelFullDescription(hoteldetails) {
    const modal = await this.modalController.create({
      component: DesricptionComponent,
      componentProps: { hotelid: hoteldetails.id }
    });

    modal.onDidDismiss().then((details) => {
      if (details !== null) {
        if(details.data != undefined)
        {
          
        }
      }
   });

    return await modal.present();
  }


}
