import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiGamesService } from 'src/app/services/api-games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  idgame: string = '';
  idaux: any;
  api: any;

  constructor(
      private route: ActivatedRoute,
      private apiGames: ApiGamesService,
    ) { 
    this.api = this.apiGames.getGames();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.idgame = params['idgame']
      }
    )
    this.idaux = this.api.find((item:any) => item.ad == this.idgame)
  }

  findAd(){
    
  }

}
