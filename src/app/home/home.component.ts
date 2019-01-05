import {Component, OnDestroy, OnInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Title} from './title.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  titleData: Title = new Title('', '', '', []);

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    /* Call method in Firebase service that gets the data from the Firebase database.*/
    this.fb.getHomeData();
    /* When data has been fetched from Firebase successfully */
    this.fb.dataReturned.subscribe(
        () => {
          this.titleData = this.fb.fetchTitle(); // Retrieve data for title section.
        }
    );
  }

  ngOnDestroy() {
    this.fb.dataReturned.unsubscribe();
  }

}
