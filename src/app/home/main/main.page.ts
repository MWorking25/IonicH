import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts= {
    loop: true, // have to add loop = true, otherwise when reach to last slide if will all the way back to first, not just smooth slide to first
    };
    slidesDidLoad(slides:IonSlides) {
    slides.startAutoplay();
    }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 600);
  }


}