import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "about", component: AboutComponent,
    children: [
      {
        path: "addInfo", component: InfoComponent
      },
      {
        path: "editInfo/:id", component: InfoComponent
      }]
  },
  {
    path:"access", loadChildren:()=>import('./access/access.module').then(op=>op.AccessModule)
  },
  {
    path:"login", loadComponent:()=>import('./login/login.component').then(op=>op.LoginComponent)
  },
  {
    path:"**", component:StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
