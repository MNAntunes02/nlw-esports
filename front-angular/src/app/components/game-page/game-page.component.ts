import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ad } from 'src/app/interfaces/ad';
import { Game } from 'src/app/interfaces/game';
import { ApiGamesService } from 'src/app/services/api-games.service';





@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  idgame: number = 0;
  idaux: any;
  api: Game[] = [];
  api$: any;
  userAd:Ad  =   {
    name : "Alisson Antunes",
    experience: 2,
    idGame : 0, 
    elo: 4,
    availabilityIn: 18,
    availabilityOut: 20,
    voice: true,
    week: 203,
    discord: "Alisson#0000"
  };

  constructor(
      private route: ActivatedRoute,
      private apiGames: ApiGamesService,
    ) { 
    this.api$ = this.apiGames.getGames();

    this.apiGames.getGames().subscribe((api) => {  
        this.api = api
        this.route.params.subscribe(
          (params: any) => this.idgame = params['idgame']
        )
        this.idaux = this.api.find((item:any) => item.ad == this.idgame)
        this.userAd.idGame = this.idgame; 
      }
    )

  }

  ngOnInit(): void {

  }


}
