import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {List} from './list/list.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit, OnDestroy {
  commonData; // This holds data for the common component.

  showSpinner = true; // Initially, show the loading spinner.

  headerImg = ''; // header stores the image header URL path.

  /* projectsData will store data for the project list page once the Firebase service has successfully retrieved the data. */
  projectsData = {list: [], statement: ''};

  /* listData is initialized to follow the convention of the array of List model to populate the list section. */
  listData: List[] = [new List('', [], '')];

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    /* The reason we are fetching common data from the project list component is because if we show the spinner when the project list data
    has been fetched, at this point we initialize the common component. This issue is that the common component then sends a request to
    fetch the common data, and when the spinner is removed at the point of when the request for common is sent, we momentarily see the
    contact section and the footer section missing some data because it waiting for the request to be successful. This looks bad in terms
    of UI and this is why it is better to fetch the common data from the project list component.
     */
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
      this.hideSpinner();
    }
    // If the data for the project list page has not been retrieved and stored in the Firebase service.
    if (!this.fb.dataProjectsStored) {
      this.fb.getProjectsData(); // Call method in Firebase service that gets data for project list page from Firebase.
      /* When data has been fetched from Firebase successfully */
      this.fb.dataProjectsRetrieved.subscribe(
          () => {
            this.projectsData = this.fb.fetchProjectsData(); // Fetch data for the project list page.
            this.listData = this.projectsData.list; // Store data for the list section.
            this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
            this.hideSpinner(); // Check to see if we can hide the spinner.
          }
      );
    } else {
      this.projectsData = this.fb.fetchProjectsData(); // Fetch data for the project list page.
      this.listData = this.projectsData.list; // Store data for the list section.
      this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
      this.hideSpinner(); // Check to see if we can hide the spinner.
    }
  }

  /* This function determines if we should hide the spinner.
   */
  hideSpinner() {
    // Has the project list data and the common data both been fetched from Firebase?
    if (this.fb.dataProjectsStored && this.fb.dataCommonStored) {
      this.showSpinner = false; // If so, hide the spinner.
    }
  }

  ngOnDestroy() {
    // When project list component is destroyed, unsubscribe from the dataProjectsRetrieved observable.
    this.fb.dataProjectsRetrieved.unsubscribe();

    // When project list component is destroyed, unsubscribe from the dataCommonRetrieved observable.
    this.fb.dataProjectsRetrieved.unsubscribe();
  }

}
