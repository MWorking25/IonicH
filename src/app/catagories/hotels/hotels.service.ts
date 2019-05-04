import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
}
