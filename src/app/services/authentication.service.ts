import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { AppGlobals } from './credencials';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private _global: AppGlobals) { }

  apiUrl = this._global.ApiLink;
    
  saveMemberDetails(memberDetails): Observable<any>{
    return this.http.post(this.apiUrl+'/api/mobile/unity/saveMemberDetails/',memberDetails).pipe(map(data => {
			 				return data;
		}));
  };
}
