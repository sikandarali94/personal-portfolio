import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Title} from './title.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titleData: Title;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    /* Call method in Firebase service that gets the data from the Firebase database.*/
    this.fb.getHomeData();
    this.fb.dataReturned.subscribe(
        () => {
          this.titleData = this.fb.fetchTitle();
        }
    );
  }

}
