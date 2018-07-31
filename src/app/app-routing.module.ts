import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DvdComponent } from './dvd/dvd.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dvds', pathMatch: 'full' },
  { path: 'dvds', component: DvdComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
