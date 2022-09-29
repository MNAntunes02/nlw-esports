import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { ApiGamesService } from 'src/app/services/api-games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  idgame: string = '';
  idaux: any;
  api: Game[] = [];
  api$: any;

  constructor(
      private route: ActivatedRoute,
      private apiGames: ApiGamesService,
    ) { 
    this.api$ = this.apiGames.getGames();

    this.apiGames.getGames().subscribe(
      (api) => {  

        this.api = api
        this.route.params.subscribe(
          (params: any) => this.idgame = params['idgame']
        )
        this.idaux = this.api.find((item:any) => item.ad == this.idgame)
      }
    )
  }

  ngOnInit(): void {
  }


}
