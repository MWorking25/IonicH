import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController } from '@ionic/angular';
import { SearchModelComponent } from './search-model/search-model.component'
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {

  filterString:String;
  constructor(private _location: Location, public modalController: ModalController) { }

  ngOnInit() {}

  backClicked() {
    this._location.back();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchModelComponent,
      componentProps: { value: "" }
    });

    modal.onDidDismiss().then((detail) => {
      if (detail !== null) {
        this.filterString = detail.data.name;
      }
   });

    return await modal.present();
  }

}
