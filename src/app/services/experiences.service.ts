import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { AppGlobals } from './credencials';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private http: HttpClient,private _global: AppGlobals) { }

  apiUrl = this._global.ApiLink;

  getExperiencesList(searchFilters): Observable<any>
  {
    return this.http.post(this.apiUrl+'/api/mobile/unity/getExperiencesList/',searchFilters).pipe(map(data => {
      return data;
    }));
  }
}
