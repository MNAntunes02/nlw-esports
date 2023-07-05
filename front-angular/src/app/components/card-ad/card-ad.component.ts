import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiGamesService } from 'src/app/services/api-games.service';
import { ApexEloService } from 'src/app/services/elos/apex-elo.service';
import { CsEloService } from 'src/app/services/elos/cs-elo.service';
import { LolEloService } from 'src/app/services/elos/lol-elo.service';
import { ValorantEloService } from 'src/app/services/elos/valorant-elo.service';
import { ResponseSubmitComponent } from 'src/app/response/components/response-submit/response-submit.component'; 
import { ResponseConectComponent } from 'src/app/response/components/response-conect/response-conect.component';
import { Ad } from 'src/app/interfaces/ad';
import { UserService } from 'src/app/services/user.service';
import { DotaEloService } from 'src/app/services/elos/dota-elo.service';

@Component({
  selector: 'app-card-ad',
  templateUrl: './card-ad.component.html',
  styleUrls: ['./card-ad.component.css']
})
export class CardAdComponent implements OnInit {



  // @Input() name! : string;
  // @Input() experience! : string;
  // @Input() idGame! : string;
  // @Input() elo! : string;
  // @Input() availabilityIn! : string;
  // @Input() availabilityOut! : string;
  // @Input() voice! : string;
  // @Input() week! : string;


  

  @Input() ad : any = {
    name : "",
    experience: 0,
    idGame : 0, 
    elo: 0,
    availabilityIn: 0,
    availabilityOut: 0,
    voice: false,
    week: 0,
    discord: ""
  };

  api$: any;
  arrEloVal:any;
  arrEloLol:any;
  arrEloCS:any;
  arrEloApex:any;
  arrEloDota:any;

  constructor
  (
    public dialog: MatDialog,
    private apiGames: ApiGamesService,
    private valorantElos: ValorantEloService,
    private lolElos: LolEloService,
    private csElos: CsEloService,
    private apexElos: ApexEloService,
    private dotaElos: DotaEloService,
    private userService : UserService
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
    this.arrEloApex = this.dotaElos.getElos().subscribe(
      elo => this.arrEloDota = elo
    );
  }

  ngOnInit(): void {
    // console.log(this.ad)
  }

  getDuo(disc:any){
    this.dialog.open(ResponseConectComponent, {
      width: '400px',
      panelClass: 'panel',
      data: {discord: disc}
    });
  }

  decimalToBinario(decimal: any) {
    return parseInt(decimal, 10).toString(2);
  }

}
