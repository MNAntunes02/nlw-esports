import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiGamesService } from 'src/app/services/api-games.service';
import { CsEloService } from 'src/app/services/elos/cs-elo.service';
import { LolEloService } from 'src/app/services/elos/lol-elo.service';
import { ValorantEloService } from 'src/app/services/elos/valorant-elo.service';
import { ResponseSubmitComponent } from '../response-submit/response-submit.component';

@Component({
  selector: 'app-form-ad',
  templateUrl: './form-ad.component.html',
  styleUrls: ['./form-ad.component.css']
})
export class FormAdComponent implements OnInit , AfterViewInit {
  
  @ViewChild('carEloVal') carEloVal! : ElementRef<HTMLDivElement>;
  @ViewChildren('inEloVal') inEloVal! : QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild('carEloLol') carEloLol! : ElementRef<HTMLDivElement>;
  @ViewChildren('inEloLol') inEloLol! : QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild('carEloCS') carEloCS! : ElementRef<HTMLDivElement>;
  @ViewChildren('inEloCS') inEloCS! : QueryList<ElementRef<HTMLInputElement>>;

  api: any;
  arrEloVal:any;
  arrEloLol:any;
  arrEloCS:any;
  contador:number = 0;

  subtasks: any = [
    {name: 'Domingo', completed: false, color: 'primary'},
    {name: 'Segunda', completed: false, color: 'primary'},
    {name: 'Terça', completed: false, color: 'primary'},
    {name: 'Quarta', completed: false, color: 'primary'},
    {name: 'Quinta', completed: false, color: 'primary'},
    {name: 'Sexta', completed: false, color: 'primary'},
    {name: 'Sábado', completed: false, color: 'primary'},
  ]

  constructor
  (
    public dialogRef: MatDialogRef<FormAdComponent>, 
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

  ngAfterViewInit(): void {
    this.resetElos()
  }

  resetElos(){
      this.contador = 0;

      //Iniciar elo com o primeiro valor
      this.inEloVal.get(0)!.nativeElement.checked = true;
      this.inEloLol.get(0)!.nativeElement.checked = true;
      this.inEloCS.get(0)!.nativeElement.checked = true;
  }

  consoleLog(inputsRadio:any){
    console.log(inputsRadio.toArray().length)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.dialog.open(ResponseSubmitComponent, {
      width: '400px',
      panelClass: 'panel'
    });
    this.dialogRef.close();
  }
 
  nextElo(carousel:any,inputsRadio:any){
    if(this.contador >= 0 && this.contador < inputsRadio.toArray().length -1){
      carousel.scrollBy(200,0);
      this.contador += 1;
      inputsRadio.get(this.contador)!.nativeElement.checked = true;
    }
  }

  backElo(carousel:any,inputsRadio:any){
    if(this.contador > 0 && this.contador < inputsRadio.toArray().length){
      carousel.scrollBy(-200,0);
      this.contador -= 1;
      inputsRadio.get(this.contador)!.nativeElement.checked = true;
    }
  }


}
