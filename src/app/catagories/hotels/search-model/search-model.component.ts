import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  NavParams,
  ModalController
} from '@ionic/angular';
import {
  FormControl
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  map,
  startWith
} from 'rxjs/operators';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import {
  HotelsService
} from '../../../services/hotels.service';
export interface SerachResult {
  serachresult: string;
  address: string;
}


@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss'],
})
export class SearchModelComponent implements OnInit {

  myControl = new FormControl();

  Filters = [];

  shownearme:boolean = true;
  // serachfilter: Observable < SerachResult > ;

  filteredOptions: Observable < SerachResult[] >

    // "value" passed in componentProps
    @Input() value: number;

  constructor(navParams: NavParams, public modalController: ModalController, public _HotelsService: HotelsService, private geolocation: Geolocation) {
    // componentProps can also be accessed at construction time using NavParams
  }


  ngOnInit() {
    /*  this.filteredOptions = this.myControl.valueChanges
       .pipe(
         startWith<string | SerachResult>(''),
         map(value => typeof value === 'string' ? value : value.serachresult),
         map(name => name ? this._filter(name) : this.Filters.slice())
       ); */


    this.myControl.valueChanges.subscribe(
      term => {

        if(term == '')
        {
          this.shownearme = true;
        }
        else
        {
        if (term != '' && term != undefined) {
          if (term.length >= 3) {
            this.shownearme = false;
            this._HotelsService.getRelaventSearch(term).subscribe(
              data => {
                this.filteredOptions = data;
                //console.log(data[0].BookName);
              })
          }
        }
      }
        
      })

  }

  displayFn(_serResult ? : SerachResult): string | undefined {
    return _serResult ? _serResult.serachresult + '\n' + _serResult.address : undefined;
  }

  private _filter(name: string): SerachResult[] {
    const filterValue = name.toLowerCase();

    return this.Filters.filter(option => option.serachresult.indexOf(filterValue) === 0);
  }


  async myDismiss(selectedvalue) {
    var result = selectedvalue;

    await this.modalController.dismiss(result);
  }

  getSelectedValue(selectedvalue) {
    this.myDismiss(selectedvalue);
  }

  setMyCurrentLocation()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.getSelectedValue({location:resp.coords,serachresult:'Near Me',address:''});

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
