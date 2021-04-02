import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DepositWaitComponent } from './deposit-wait/deposit-wait.component';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NewOfferComponent } from './new-offer/new-offer.component';


DepositWaitComponent


const routes: Routes = [{
  path: '',
  component: LoginComponent,
},
{ path: 'registration', component: RegistrationComponent },
{ path: 'AdminLogin', component: AdminLoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'homeAdmin', component: HomeAdminComponent },
{ path: 'depositWait', component: DepositWaitComponent },
{ path: 'listTransfert' ,component :ListTransfertComponent},
{path: 'listClient' ,component:ListClientComponent},
{path: 'newOffer' ,component:NewOfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
