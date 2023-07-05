import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { catchError, Observable, of } from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';
import { Ad } from 'src/app/interfaces/ad';
import { ValorantEloService } from 'src/app/services/elos/valorant-elo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  faPen = faPen;

  user: any;
  arrEloVal:any;
  api$: any;
  error:any;

  constructor
  (
    private userService : UserService,
    private valorantElos: ValorantEloService
  ) { 

    // try {
    //   this.api$ = this.userService.getAds();
    // } catch (error) {
    //   console.log("deu ruim", error)
    // }

    this.api$ = this.userService.getAds()
    .pipe(
      catchError(error => {
        console.log(error)
        this.error = error.status;
        return of([])
      })
    );
    
    this.user = this.userService.getAds().subscribe(
      ads => this.user = ads
    );
  }

  ngOnInit(): void {
    console.log(this.user);
  }

}
