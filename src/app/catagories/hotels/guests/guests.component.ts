import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  @Input() guests: number;
  @Input() rooms: number;
  constructor(public modalController: ModalController, public toastController: ToastController) { }

  adults:number = 2;
  children:number = 0;
  totalguest = 0;

  ngOnInit() {
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  increaseEntry(key)
  {
    if(this.totalguest < 12 * this.rooms)
    {
      if(key == 'adults')
      {
        this.adults = this.adults +1;
      }
      if(key == 'children')
      {
        this.children = this.children +1;
      }
      this.totalguest =  this.adults + this.children;
    }
    else{
          this.presentToast('Upto 12 guests are allowed in one room.');
    }
  }

  reduceEntry(key)
  {
    if(eval('this.'+key) > 0)
    {
      this.totalguest = this.totalguest - this.adults + this.children;

      if(key == 'adults')
      {
        this.adults = this.adults -1;
      }
      if(key == 'children')
      {
        this.children = this.children -1;
      }
      
    }
  }

  reduceRoomEntry()
  {
    if(this.rooms > 1)
      this.rooms = this.rooms - 1;
  }
  increaseRoomEntry()
  {
    if(this.rooms < 10)
      this.rooms = this.rooms + 1;
      else
      this.presentToast('Cannot add more thane 10 rooms.');
  }

  async myDismissWithChanges() {
    await this.modalController.dismiss({guests:this.totalguest > 0 ?this.totalguest : this.guests,rooms:this.rooms});
  }

  async myDismiss() {
    await this.modalController.dismiss({guests:this.guests,rooms:this.rooms});
  }

}
