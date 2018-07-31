import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Dvd} from '../app.component';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {DvdService} from '../dvd.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvdCollection;
  dvds;

  dvdDoc;
  dvd;

  selectedDvd;

  constructor(private afs: AngularFirestore,
              private dvdServivice: DvdService) {
  }

  ngOnInit() {
    this.dvdCollection = this.dvdServivice.getDataServ();
    this.dvds = this.dvdServivice.getDataS();
  }

  getDvd(dvdId) {
    this.dvdDoc = this.dvdServivice.getDvdDocS(dvdId);
    this.dvd = this.dvdServivice.getDvdS(dvdId);
  }

  deleteDvd(dvdId) {
    this.dvdServivice.deleteDvdS(dvdId)
  }

  onSelect(dvd: Dvd) {
    this.selectedDvd =  this.dvdServivice.onSelectS(dvd)
  }

}
