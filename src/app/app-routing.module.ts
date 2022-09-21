import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './components/game-page/game-page.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'game',component: GamePageComponent},
  {path:'game/:idgame',component: GamePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
