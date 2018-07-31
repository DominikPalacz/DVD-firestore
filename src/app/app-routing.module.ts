import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DvdComponent } from './dvd/dvd.component';

const routes: Routes = [
  { path: 'dvds', component: DvdComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
