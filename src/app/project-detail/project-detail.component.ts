import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  detailData = { banner: '', git: '', phases: [], summary: {}};

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    // If the data for the project detail page has not been retrieved and stored in the Firebase service.
    if (!this.fb.dataDetailStored) {
      this.fb.getDetailData(); // Call method in Firebase service that gets data for project detail page from Firebase.
      /* When data has been fetched from Firebase successfully */
      this.fb.dataDetailRetrieved.subscribe(
          () => {
            this.detailData = this.fb.fetchDetailData('personal-folio'); // Fetch data for the project list page.
          }
      );
    } else {
        this.detailData = this.fb.fetchDetailData('personal-folio'); // Fetch data for the project list page.
    }
  }

  ngOnDestroy() {
      // When project detail component is destroyed, unsubscribe from the dataDetailRetrieved observable.
      this.fb.dataDetailRetrieved.unsubscribe();
  }

}
