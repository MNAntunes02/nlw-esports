import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { MainComponent } from './components/main/main.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { FormAdComponent } from './components/form-ad/form-ad.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { ResponseSubmitComponent } from './components/response-submit/response-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MainComponent,
    CardMainComponent,
    FormAdComponent,
    HomeComponent,
    GamePageComponent,
    CardAdComponent,
    ResponseSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AngularMaterialModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
