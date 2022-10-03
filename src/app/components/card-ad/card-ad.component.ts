import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiGamesService } from 'src/app/services/api-games.service';
import { ApexEloService } from 'src/app/services/elos/apex-elo.service';
import { CsEloService } from 'src/app/services/elos/cs-elo.service';
import { LolEloService } from 'src/app/services/elos/lol-elo.service';
import { ValorantEloService } from 'src/app/services/elos/valorant-elo.service';
import { ResponseSubmitComponent } from 'src/app/response/components/response-submit/response-submit.component'; 
import { ResponseConectComponent } from 'src/app/response/components/response-conect/response-conect.component';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.css']
})
export class CardAdComponent implements OnInit {

  @Input() idaux! : string;
  @Input() elo! : string;

  api$: any;
  arrEloVal:any;
  arrEloLol:any;
  arrEloCS:any;
  arrEloApex:any;

  constructor
  (
    public dialog: MatDialog,
    private apiGames: ApiGamesService,
    private valorantElos: ValorantEloService,
    private lolElos: LolEloService,
    private csElos: CsEloService,
    private apexElos: ApexEloService
  ) {
    this.api$ = this.apiGames.getGames();
    this.arrEloVal = this.valorantElos.getElos().subscribe(
      elo => this.arrEloVal = elo
    );
    this.arrEloLol = this.lolElos.getElos().subscribe(
      elo => this.arrEloLol = elo
    );
    this.arrEloCS = this.csElos.getElos().subscribe(
      elo => this.arrEloCS = elo
    );
    this.arrEloApex = this.apexElos.getElos().subscribe(
      elo => this.arrEloApex = elo
    );
  }

  ngOnInit(): void {

  }

  getDuo(){
    this.dialog.open(ResponseConectComponent, {
      width: '400px',
      panelClass: 'panel'
    });
  }

}
