import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    headerImg = ''; // This stores the header image url.
    // detailData will store data for the project detail page once the Firebase service has successfully retrieved the data.
    detailData = { banner: '', git: '', phases: [], summary: {}};
    name: string; // This stores the name parameter value in the URL.

  constructor(private fb: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* Subscribe to the observable that observes changes in the URL parameter. This observable is unsubscribed from automatically when
    the component is destroyed.
     */
    this.route.params
      .subscribe(
          (params: Params) => {
              this.name = params['name']; // Store the name parameter.
          }
      );
    // If the data for the project detail page has not been retrieved and stored in the Firebase service.
    if (!this.fb.dataDetailStored) {
      this.fb.getDetailData(); // Call method in Firebase service that gets data for project detail page from Firebase.
      /* When data has been fetched from Firebase successfully */
      this.fb.dataDetailRetrieved.subscribe(
          () => {
            this.detailData = this.fb.fetchDetailData(this.name); // Fetch data for the project detail page based on the name parameter.
            this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
          }
      );
    } else {
        this.detailData = this.fb.fetchDetailData(this.name); // Fetch data for the project detail page.
        this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
    }
  }

  ngOnDestroy() {
      // When project detail component is destroyed, unsubscribe from the dataDetailRetrieved observable.
      this.fb.dataDetailRetrieved.unsubscribe();
  }

}
