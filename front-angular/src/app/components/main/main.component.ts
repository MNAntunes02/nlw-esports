import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/game';
import { ApiGamesService } from 'src/app/services/api-games.service';
import { FormAdComponent } from '../form-ad/form-ad.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  api$: Observable<Game[]>;

  constructor
  (
    public dialog: MatDialog,
    private apiGames: ApiGamesService,
  ) 
  {
    this.api$ = this.apiGames.getGames();
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(FormAdComponent, {
      width: '600px',
      panelClass: 'panel'
    });
  }

  


}
