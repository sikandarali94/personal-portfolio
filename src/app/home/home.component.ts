import {Component, OnDestroy, OnInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Title} from './title.model';
import {Project} from './projects/project.model';
import {About} from './about/about.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    homeData; // homeData will store data for the home page once the Firebase service has successfully retrieved the data.
    /* titleData is initialized to follow the convention of the Title model to populate the title section.
     */
    titleData: Title = new Title('', '', '', []);
    /* projectsData is initialized to follow the convention of the Project model/s within an array to populate the projects section.
     */
    projectsData: Project[] = [new Project('', [], '', '', '', [], '')];
    /* aboutData is initialized to follow the convention of the About model to populate the about section.
     */
    aboutData: About = new About('', [], '');

    constructor(private fb: FirebaseService) { }

    ngOnInit() {
        if (!this.fb.dataHomeStored) {
            /* Call method in Firebase service that gets the data for home page from the Firebase database.*/
            this.fb.getHomeData();
            /* When data has been fetched from Firebase successfully */
            this.fb.dataHomeRetrieved.subscribe(
                () => {
                    this.homeData = this.fb.fetchHomeData(); // Fetch data for the home page.
                    this.titleData = this.homeData.title; // Store data for title section.
                    this.projectsData = this.homeData.projects; // Store data for projects section.
                    this.aboutData = this.homeData.about; // Store data for about section.
                }
            );
        } else {
            this.homeData = this.fb.fetchHomeData(); // Fetch data for the home page.
            this.titleData = this.homeData.title; // Store data for title section.
            this.projectsData = this.homeData.projects; // Store data for projects section.
            this.aboutData = this.homeData.about; // Store data for about section.
        }
    }

    ngOnDestroy() {
        this.fb.dataHomeRetrieved.unsubscribe(); // When home component is destroyed, unsubscribe from the dataHomeRetrieved observable.
    }

}
