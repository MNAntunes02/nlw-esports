import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPen, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/game';
import { ApiGamesService } from 'src/app/services/api-games.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  faInstagram = faInstagram;
  faTwitch = faTwitch;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faPen = faPen;
  faRightFromBracket = faRightFromBracket;

  api: Game[] = [];

  constructor
  (
    private apiGames: ApiGamesService,
  ) 
  {
    // this.api = this.apiGames.getGames();
    this.apiGames.getGames().subscribe(
      (api) => this.api = api
    )
  }

  ngOnInit(): void {
  }

}
