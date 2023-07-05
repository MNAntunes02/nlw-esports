import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LogoComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LogoComponent,
    LoadingComponent
  ]
})
export class PublicModule { }
