import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, first, of } from 'rxjs';
import { Ad } from '../interfaces/ad';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private readonly API = 'api/ads';
  private readonly API = 'assets/jsons/myads.json';


  constructor(private httpclient: HttpClient) { }

  getAds(){
    return this.httpclient.get<Ad[]>(this.API)
    .pipe(
      first()
    );
  }
}
