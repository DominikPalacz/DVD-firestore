import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Dvd} from './app.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DvdService implements OnInit {

  dvdCollection: AngularFirestoreCollection<Dvd>;
  dvds: any; //Observable<Dvd[]>;

  dvdDoc: AngularFirestoreDocument<Dvd>;
  dvd: Observable<Dvd>;

  selectedDvd: Dvd;


  constructor(private afs: AngularFirestore) { }

  ngOnInit(){
    this.getDataServ();
    this.getDataS()
  }

  getDataServ(){
   return this.dvdCollection = this.afs.collection('dvd');
  }

  getDataS(){
    return this.dvds = this.dvdCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Dvd;
          const id = a.payload.doc.id;
          return {id, data};
        });
      });
  }

  getDvdDocS(dvdId){
    console.log('z serv');
    this.dvdDoc = this.afs.doc('dvd/' + dvdId);
    return this.dvdDoc
  }
  getDvdS(dvdId) {
    console.log('2x');
    return this.dvdDoc.valueChanges();
  }
  onSelectS(dvd: Dvd){
    console.log('onSelect z serwisu');
    return dvd;
  }

  deleteDvdS(dvdId){
    console.log('del z servisu');
    return this.afs.doc('dvd/' + dvdId).delete();
  }

}
