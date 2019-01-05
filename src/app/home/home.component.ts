import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    /* Call method in Firebase service that gets the data from the Firebase database.*/
    this.fb.getHomeData();
  }

}
