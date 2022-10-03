import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';  
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ResponseSubmitComponent } from './components/response-submit/response-submit.component';
import { ResponseConectComponent } from './components/response-conect/response-conect.component';



@NgModule({
  declarations: [
    ResponseSubmitComponent,
    ResponseConectComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports:[
    ResponseSubmitComponent,
    ResponseConectComponent
  ]
})
export class ResponseModule { }
