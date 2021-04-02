import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DepositWaitComponent } from './deposit-wait/deposit-wait.component';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NewOfferComponent } from './new-offer/new-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdminLoginComponent,
    HomeComponent,
    HomeAdminComponent,
    DepositWaitComponent,
    ListTransfertComponent,
    ListClientComponent,
    NewOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
