import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';
import { delay, first, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {

  private readonly API = './assets/jsons/games.json';

  constructor(private httpclient: HttpClient) { }

  getGames(){
    return this.httpclient.get<Game[]>(this.API)
    .pipe(
      first()
    );
  }

}
