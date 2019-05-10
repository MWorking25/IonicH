import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @Input() value: number;

  constructor(navParams: NavParams, public modalController: ModalController,) { }

  ngOnInit() {
  }

  async myDismiss() {
    await this.modalController.dismiss();
  }

}
