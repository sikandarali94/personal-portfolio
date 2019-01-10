import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    commonData; // This holds data for the common component.

    showSpinner = true; // Initially, show the loading spinner.

    headerImg = ''; // This stores the header image url.

    // detailData will store data for the project detail page once the Firebase service has successfully retrieved the data.
    detailData = { banner: '', git: '', phases: [], summary: {}};

    name: string; // This stores the name parameter value in the URL.

    constructor(private fb: FirebaseService, private route: ActivatedRoute) { }

    ngOnInit() {
        if (!this.fb.dataCommonStored) {
            /* Call method in Firebase service that gets the data for common component from the Firebase database.*/
            this.fb.getCommonData();
            /* When data has been fetched from Firebase successfully */
            this.fb.dataCommonRetrieved.subscribe(
              () => {
                  this.commonData = this.fb.fetchCommonData(); // Fetch data for the common component.
                  this.hideSpinner(); // Check to see if we can hide the spinner.
              }
            );
        } else {
            this.commonData = this.fb.fetchCommonData(); // Fetch data for the common component.
            this.hideSpinner(); // Check to see if we can hide the spinner.
        }
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
                    // Fetch data for the project detail page based on the name parameter.
                    this.detailData = this.fb.fetchDetailData(this.name);
                    this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
                    this.hideSpinner(); // Check to see if we can hide the spinner.
                }
            );
        } else {
            this.detailData = this.fb.fetchDetailData(this.name); // Fetch data for the project detail page.
            this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
            this.hideSpinner(); // Check to see if we can hide the spinner.
        }
    }

    hideSpinner() {
        // Has the project detail data and the common data both been fetched from Firebase?
        if (this.fb.dataDetailStored && this.fb.dataCommonStored) {
            this.showSpinner = false; // If so, hide the spinner.
        }
    }

    ngOnDestroy() {
        // When project detail component is destroyed, unsubscribe from the dataDetailRetrieved observable.
        this.fb.dataDetailRetrieved.unsubscribe();

        // When project detail component is destroyed, unsubscribe from the dataCommonRetrieved observable.
        this.fb.dataCommonRetrieved.unsubscribe();
    }

}
