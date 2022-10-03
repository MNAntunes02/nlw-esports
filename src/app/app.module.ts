import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from "./modules/angular-material/angular-material.module";
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { FormAdComponent } from './components/form-ad/form-ad.component';
import { HomeComponent } from './components/home/home.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';

import { ResponseModule } from './response/response.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardMainComponent,
    FormAdComponent,
    HomeComponent,
    GamePageComponent,
    CardAdComponent,
    MyAdsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ResponseModule,
    UserModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
