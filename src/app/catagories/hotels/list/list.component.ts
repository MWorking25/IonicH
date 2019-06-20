import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HotelsService } from '../../../services/hotels.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() searchFilter:Object;

  seachResult:any;

  constructor(public modalController: ModalController, public toastController: ToastController, public _HotelsService: HotelsService) { }

  

  ngOnInit() {
    this.getHotelsList();
  }

  async myDismiss() {
    await this.modalController.dismiss({});
  }







  getHotelsList()
  {
    this._HotelsService.getHotelsList(this.searchFilter).subscribe(
      data => {
        this.seachResult = data;
      })

  }

}
