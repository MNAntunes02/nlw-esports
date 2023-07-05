import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { InfoUserComponent } from './info-user/info-user.component';
import { AppModule } from '../app.module';
import { PublicModule } from '../public/public.module';


@NgModule({
  declarations: [
    UserComponent,
    InfoUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    PublicModule
  ],
  exports:[
    UserComponent,
    InfoUserComponent
  ]
})
export class UserModule { }
