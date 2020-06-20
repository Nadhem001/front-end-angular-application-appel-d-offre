import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListeOffersComponent } from './liste-offers/liste-offers.component';
import { ClientComponent } from './client/client.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListClientComponent } from './list-client/list-client.component';
import {HttpClientModule} from '@angular/common/http';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListeOffersComponent,
    ClientComponent,
  
    NavBarComponent,
    ListClientComponent,
    Page404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
