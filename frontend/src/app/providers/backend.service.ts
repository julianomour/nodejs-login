import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class BackendService {

  head = new HttpHeaders()
  .append('accept', 'application/json')
  .append('content-type', 'application/json')

  constructor(private _http: HttpClient) { }

  registerUser  = (data): Promise<any> => {
    return this._http.post('/auth/register', data).toPromise();
  }

  authUser = (data): Promise<any> => {
    console.log(data)
    return this._http.post(`/auth/authenticate`, data).toPromise();
  }
}


