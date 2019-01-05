import {Component, OnDestroy, OnInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Title} from './title.model';
import {Project} from './projects/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  titleData: Title = new Title('', '', '', []);
  projectsData: Project = new Project('', [], '', '', '', [], '');

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    if (!this.fb.dataHomeStored) {
      /* Call method in Firebase service that gets the data for home page from the Firebase database.*/
      this.fb.getHomeData();
      /* When data has been fetched from Firebase successfully */
      this.fb.dataHomeRetrieved.subscribe(
          () => {
            this.titleData = this.fb.fetchTitle(); // Retrieve data for title section.
            this.projectsData = this.fb.fetchProjects(); // Retrieve data for projects section.
          }
      );
    } else {
      this.titleData = this.fb.fetchTitle(); // Retrieve data for title section.
    }
  }

  ngOnDestroy() {
    this.fb.dataHomeRetrieved.unsubscribe();
  }

}
