import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController } from '@ionic/angular';
import { SearchModelComponent } from './search-model/search-model.component';
import { GuestsComponent } from './guests/guests.component';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {

  filterString:String;
  totalguest:Number = 2;
  totalRooms:Number = 1;
  constructor(private _location: Location, public modalController: ModalController) { }
  currentDate = new Date();
  nextdate = new Date();
  currentYear = this.currentDate.getFullYear();
  checkoutDate = new Date(this.nextdate.setDate(this.nextdate.getDate() + 1));
  maxYear = this.currentDate.getFullYear() + 1;

  tripTypes = [{type:'Business',icon:'icon-business-trip',iconcolor:''},{type:'Family',icon:'icon-family',iconcolor:''},{type:'Romatic',icon:'icon-relationship',iconcolor:''}]

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchModelComponent,
      componentProps: { value: "" }
    });

    modal.onDidDismiss().then((details) => {
      if (details !== null) {
        if(details.data != undefined)
        {
          this.filterString = '<div class="col-12"><h3>'+details.data.serachresult+'</h3></div><div class="col-12"><ion-text>'+details.data.address+'</ion-text></div>';
        }
      }
   });

    return await modal.present();
  }

  async presentGeustModal() {
    const modal = await this.modalController.create({
      component: GuestsComponent,
      componentProps: { guests:this.totalguest, rooms:this.totalRooms }
    });

    modal.onDidDismiss().then((details) => {
      if (details !== null) {
        if(details.data != undefined)
        {
          // this.totalguest = 
          // this.totalRooms = 
          // this.filterString = '<div class="col-12"><h3>'+details.data.serachresult+'</h3></div><div class="col-12"><ion-text>'+details.data.address+'</ion-text></div>';
        }
      }
   });

    return await modal.present();
  }


  selectType(triptype)
  {
    this.tripTypes.map((value)=>{
        value.iconcolor = '';
    });

    triptype.iconcolor = 'text-primary';
  }

}
