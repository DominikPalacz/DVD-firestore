import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';
import { DvdComponent } from './dvd/dvd.component';
import { DvdDetailComponent } from './dvd-detail/dvd-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DvdService} from './dvd.service';

var firebaseConfig = {
  apiKey: "AIzaSyAmON0ZMCgdy2Nqs-DgfC5_T0d_tGj7Gbs",
  authDomain: "dvd-firestore.firebaseapp.com",
  databaseURL: "https://dvd-firestore.firebaseio.com",
  projectId: "dvd-firestore",
  storageBucket: "dvd-firestore.appspot.com",
  messagingSenderId: "298057613832"
};

@NgModule({
  declarations: [
    AppComponent,
    DvdComponent,
    DvdDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DvdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
