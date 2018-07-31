import { Component, OnInit, Input } from '@angular/core';
import { Dvd } from '../app.component';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  @Input() dvd: Dvd;

  constructor() { }

  ngOnInit() {
  }

}
