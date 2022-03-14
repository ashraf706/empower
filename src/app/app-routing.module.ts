import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import {ConnectComponent} from "./connect/connect.component";
import {LearnComponent} from "./learn/learn.component";

const routes: Routes = [
  { path: 'connect', component: ConnectComponent },
  { path: 'learn', component: LearnComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
