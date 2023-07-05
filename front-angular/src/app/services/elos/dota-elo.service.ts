import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Elo } from 'src/app/interfaces/elo';

@Injectable({
  providedIn: 'root'
})
export class DotaEloService {

  private readonly API = './assets/jsons/dota-elo.json';

  constructor(private httpclient: HttpClient) { }

  getElos(){
    return this.httpclient.get<Elo[]>(this.API)
    .pipe(
      first()
    );
  }

}
