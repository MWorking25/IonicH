import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { AppGlobals } from './credencials';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient,private _global: AppGlobals) { }

  apiUrl = this._global.ApiLink;

  getExistingLocationsList(): Observable<any>{
    return this.http.get<any>(this.apiUrl+'/api/unity/getExistingLocations/').pipe(map(data => {
			 				return data;
		}));
  };

  getHotelsDeatils(hotelid): Observable<any>{
    return this.http.get<any>(this.apiUrl+'/api/mobile/unity/getHotelsDeatils/'+hotelid).pipe(map(data => {
			 				return data;
		}));
  };

  getRelaventSearch(filteredkey): Observable<any>{
    var searchResult = this.http.get<any>(this.apiUrl+'/api/mobile/unity/getRelaventSearch/'+filteredkey)
    .pipe(
        //debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
        map(
            (data: any) => {
                return (
                    data.length != 0 ? data as any[] : [{"serachresult": "No Record Found"} as any]
                );
            }
    ));
    return searchResult; 
  };


  
  getHotelsList(filterquery): Observable<any>{
    return this.http.post(this.apiUrl+'/api/mobile/unity/getHotelsList/',filterquery).pipe(map(data => {
			 				return data;
		}));
  };

}
