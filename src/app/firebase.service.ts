import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseService {
    dataHomeRetrieved = new Subject();
    dataHomeStored = false;

    private homeData;

    constructor(private http: HttpClient) {}

    getHomeData() {
        /* GET data from Firebase to populate in the app. Subscribing here because we want to store the retrieved data within the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/home.json').subscribe(
            result => {
                this.homeData = result; // Store the retrieved data within the service.
                this.dataHomeStored = true;
                this.dataHomeRetrieved.next(); // Components that rely on the retrieved data know now that data retrieval was successful.
            },
            error => {
                console.log(error);
            }
        );
    }

    fetchTitle() {
        return this.homeData.title; // Return title section data.
    }
}
