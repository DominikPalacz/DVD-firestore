import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Dvd} from '../app.component';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvdCollection: AngularFirestoreCollection<Dvd>;
  dvds: any; //Observable<Dvd[]>;

  dvdDoc: AngularFirestoreDocument<Dvd>;
  dvd: Observable<Dvd>;

  selectedDvd: Dvd;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.dvdCollection = this.afs.collection('dvd');
    //this.dvd = this.dvdCollection.valueChanges();
    this.dvds = this.dvdCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Dvd;
          const id = a.payload.doc.id;
          return {id, data};
        });
      });
  }

  getDvd(dvdId) {
    this.dvdDoc = this.afs.doc('dvd/' + dvdId);
    this.dvd = this.dvdDoc.valueChanges();
  }

  deleteDvd(dvdId) {
    this.afs.doc('dvd/' + dvdId).delete();
  }

  onSelect(dvd: Dvd) {
    this.selectedDvd = dvd;
  }

}
