import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {ConnectComponent} from "./connect/connect.component";
import {LearnComponent} from "./learn/learn.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
