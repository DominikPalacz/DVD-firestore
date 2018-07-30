import {Component} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

export interface Dvd {
  title: string;
  content: string;
}

export interface DvdId extends Dvd {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleApp = 'Dvd app Dominik Palacz';

  id: string;
  title: string;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
  }

  addDvd() {
    this.afs.collection('dvd').add({'id': this.id, 'title': this.title});
  }

}
