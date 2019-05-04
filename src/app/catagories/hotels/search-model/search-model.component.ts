import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { HotelsService } from '../hotels.service';
export interface User {
  name: string;
}


@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss'],
})
export class SearchModelComponent implements OnInit{

  myControl = new FormControl();

  Filters = [];
  

  serachfilter:Observable<User>  ;

  filteredOptions: Observable<User[]> 

 // "value" passed in componentProps
 @Input() value: number;

 constructor(navParams: NavParams, public modalController: ModalController, public _HotelsService : HotelsService) {
   // componentProps can also be accessed at construction time using NavParams
 }


 ngOnInit() {

  this.getExistingLocations();
   
  this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith<string | User>(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.Filters.slice())
    );
}

displayFn(user?: User): string | undefined {
  return user ? user.name : undefined;
}

private _filter(name: string): User[] {
  const filterValue = name.toLowerCase();

  return this.Filters.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}


 async myDismiss(selectedvalue) {
  var result = selectedvalue;
  
  await this.modalController.dismiss(result);
}



getSelectedValue(selectedvalue)
{
  this.myDismiss(selectedvalue);
}


getExistingLocations()
{
  this._HotelsService.getExistingLocationsList().subscribe((res:any)=>{
    this.Filters = res;
  });	
};


}
