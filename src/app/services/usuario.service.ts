import { IUserRespoonse } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  private api_endpoint = `${environment.api_url}users/asas`;

  getUsers() {
    return this._http.get<IUserRespoonse>(`${this.api_endpoint}?per_page=6&delay=6`);
  }
}
