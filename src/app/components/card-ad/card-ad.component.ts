import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiGamesService } from 'src/app/services/api-games.service';
import { CsEloService } from 'src/app/services/elos/cs-elo.service';
import { LolEloService } from 'src/app/services/elos/lol-elo.service';
import { ValorantEloService } from 'src/app/services/elos/valorant-elo.service';
import { ResponseSubmitComponent } from '../response-submit/response-submit.component';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.css']
})
export class CardAdComponent implements OnInit {

  @Input() idaux! : string;
  @Input() elo! : string;

  api: any;
  arrEloVal:any;
  arrEloLol:any;
  arrEloCS:any;

  constructor
  (
    public dialog: MatDialog,
    private apiGames: ApiGamesService,
    private valorantElos: ValorantEloService,
    private lolElos: LolEloService,
    private csElos: CsEloService,
  ) {
    this.api = this.apiGames.getGames();
    this.arrEloVal = this.valorantElos.getElos();
    this.arrEloLol = this.lolElos.getElos();
    this.arrEloCS = this.csElos.getElos();
  }

  ngOnInit(): void {

  }

  getDuo(){
    this.dialog.open(ResponseSubmitComponent, {
      width: '400px',
      panelClass: 'panel'
    });
  }

}
