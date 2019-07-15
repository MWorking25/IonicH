import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ScrollDetail } from '@ionic/core';
import { HotelsService } from '../../../services/hotels.service';
@Component({
  selector: 'app-desricption',
  templateUrl: './desricption.component.html',
  styleUrls: ['./desricption.component.scss'],
})
export class DesricptionComponent implements OnInit {

  @Input() hotelid:Object;
  // @ViewChild('box') box: ElementRef;
  // @ViewChild("box", { read: ElementRef }) private box: ElementRef;
  hotelDetails:any;
  hotelAminities:any;
  showToolbar = true;

  constructor(public modalController: ModalController, public toastController: ToastController,private router: Router, public _HotelsService: HotelsService) { }

  ngOnInit() {
    this.getHotelsDeatils(this.hotelid);
  }

  getHotelsDeatils(hotelid)
  {
    this._HotelsService.getHotelsDeatils(hotelid).subscribe(
      data => {
        this.hotelDetails = data;
        this.hotelAminities = JSON.parse(data[0].aminities);
      });
  }

  async myDismiss() {
    await this.modalController.dismiss({});
  }



  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
     const scrollTop = $event.detail.scrollTop;
     this.showToolbar != scrollTop >= 100; 
   } 
 }

 

}
