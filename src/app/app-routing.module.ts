import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './components/game-page/game-page.component';
import { HomeComponent } from './components/home/home.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';
import { InfoUserComponent } from './user/info-user/info-user.component';
import { UserRoutingModule } from './user/user-routing.module';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'game',component: GamePageComponent},
  {path:'game/:idgame',component: GamePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
