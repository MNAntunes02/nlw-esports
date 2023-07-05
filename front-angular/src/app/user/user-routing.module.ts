import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {   path: 'user', 
      component: UserComponent,
      children: [
        {
          path: '',
          children: [
            {path: 'details', component: InfoUserComponent},
            {path: 'myads', component: MyAdsComponent},
            {path: '', component: InfoUserComponent}
          ],
        }
      ]
}];


// [

//   {path: 'user', redirectTo: 'user/details'},
//   {path: 'user/details', component: InfoUserComponent},
//   {path: 'user/myads', component: MyAdsComponent}

// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
