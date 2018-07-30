import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


interface Dvd {
  title: string;
  content: string;
}
interface DvdId extends Dvd {
  id: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleApp = 'Dvd app Dominik Palacz';

  dvdCollection: AngularFirestoreCollection<Dvd>;
  dvd: any; //Observable<Dvd[]>;

  id: string;
  title: string;

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
    this.dvdCollection = this.afs.collection('dvd');
    //this.dvd = this.dvdCollection.valueChanges();
    this.dvd = this.dvdCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Dvd;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }

  addDvd(){
    this.afs.collection('dvd').add({'id': this.id, 'title': this.title})
  }



}
