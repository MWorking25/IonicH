import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }


  getExistingLocationsList(): Observable<any>{
    return this.http.get<any>('http://103.252.7.5:3800/api/unity/getExistingLocations/').pipe(map(data => {
			 				return data;
		}));
  };

  getRelaventSearch(filteredkey): Observable<any>{
    var searchResult = this.http.get<any>('http://103.252.7.5:3800/api/mobile/unity/getRelaventSearch/'+filteredkey)
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
}
