import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Title} from './home/title.model';
import {Project} from './home/projects/project.model';
import {About} from './home/about/about.model';

@Injectable()
export class FirebaseService {
    dataHomeRetrieved = new Subject(); // Observes if
    dataHomeStored = false;

    private homeData;

    constructor(private http: HttpClient) {}

    getHomeData() {
        /* GET data from Firebase to populate the home page in the app. Subscribing here because we want to store the retrieved data within
        the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/home.json').subscribe(
            result => {
                this.homeData = result; // Store the retrieved home page data within the service.
                this.dataHomeStored = true;
                this.dataHomeRetrieved.next(); // Indicate home page data has been retrieved
            },
            error => {
                console.log(error);
            }
        );
    }

    fetchTitle(): Title {
        return this.homeData.title; // Return title section data.
    }

    fetchProjects(): Project[] {
        return this.homeData.projects; // Return projects section data.
    }

    fetchAbout(): About {
        return this.homeData.about; // Return projects about data.
    }
}
