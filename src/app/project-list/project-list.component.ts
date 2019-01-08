import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {List} from './list/list.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})

export class ProjectListComponent implements OnInit, OnDestroy {
  headerImg = ''; // header stores the image header URL path.

  /* projectsData will store data for the project list page once the Firebase service has successfully retrieved the data. */
  projectsData = {list: [], statement: ''};

  /* listData is initialized to follow the convention of the array of List model to populate the list section. */
  listData: List[] = [new List('', [], '')];

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    // If the data for the project list page has not been retrieved and stored in the Firebase service.
    if (!this.fb.dataProjectsStored) {
      this.fb.getProjectsData(); // Call method in Firebase service that gets data for project list page from Firebase.
      /* When data has been fetched from Firebase successfully */
      this.fb.dataProjectsRetrieved.subscribe(
          () => {
            this.projectsData = this.fb.fetchProjectsData(); // Fetch data for the project list page.
            this.listData = this.projectsData.list; // Store data for the list section.
            this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
          }
      );
    } else {
      this.projectsData = this.fb.fetchProjectsData(); // Fetch data for the project list page.
      this.listData = this.projectsData.list; // Store data for the list section.
      this.headerImg = this.fb.fetchHeader(); // Store image header URL path.
    }
  }

  ngOnDestroy() {
    // When project list component is destroyed, unsubscribe from the dataProjectsRetrieved observable.
    this.fb.dataProjectsRetrieved.unsubscribe();
  }

}
