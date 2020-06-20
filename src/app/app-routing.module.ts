import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListeOffersComponent } from './liste-offers/liste-offers.component';
import { Page404Component } from './page404/page404.component';
//import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'list-client',
    component:ListClientComponent,
    //canActivate:[AuthGuard]
  },
  {
    path:'liste-offers',
    component:ListeOffersComponent,
    //canActivate:[AuthGuard]
  },
  {
    path:'**',
    component:Page404Component
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
