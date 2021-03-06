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

  HtLikeForExp(expdetails): Observable<any>
  {
    return this.http.post(this.apiUrl+'/api/mobile/unity/HtLikeForExp/',expdetails).pipe(map(data => {
      return data;
    }));
  }

  getExperienceDetails(expidDetails): Observable<any>
  {
    return this.http.post(this.apiUrl+'/api/mobile/unity/getExperienceDetails/',expidDetails).pipe(map(data => {
      return data;
    }));
  }

  getExpServices(expid,exptype): Observable<any>
  {
    return this.http.get(this.apiUrl+'/api/mobile/unity/getExpServices/'+expid+'/'+exptype).pipe(map(data => {
      return data;
    }));
  }
}
