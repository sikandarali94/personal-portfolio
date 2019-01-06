import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseService {
    dataHomeRetrieved = new Subject(); // Observes if data for the home page has been retrieved successfully.
    dataHomeStored = false; // Indicates if data for the home page has been stored in the service.

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

    fetchHomeData() {
        return this.homeData;
    }
}
