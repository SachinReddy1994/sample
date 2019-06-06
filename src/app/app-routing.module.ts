import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AddvendorComponent } from './addvendor/addvendor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchresultsComponent } from './searchresults/searchresults.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'addvendor',
        component: AddvendorComponent
      },
      {
        path: 'city/:name',
        component: SearchresultsComponent
      },
      {
        path: 'vendor/:name',
        component: SearchresultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
