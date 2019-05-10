import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from './profile/profile.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async OpenProfileModal() {
    const modal = await this.modalController.create({
      component: ProfilePage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
