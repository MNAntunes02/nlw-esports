import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first , delay , tap } from 'rxjs/operators';
import { Elo } from 'src/app/interfaces/elo';

@Injectable({
  providedIn: 'root'
})
export class ValorantEloService {

  private readonly API = '/assets/jsons/valorant-elo.json'

  constructor(private httpclient: HttpClient) { }

  getElos(){
    return this.httpclient.get<Elo[]>(this.API)
    .pipe(
      first(),
      delay(500),
    );
  }
}
