import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class FirebaseService {
    dataReturned = new Subject();

    private homeData;

    constructor(private http: HttpClient) {}

    getHomeData() {
        /* GET data from Firebase to populate in the app. Subscribing here because we want to store the returned data within the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/home.json').subscribe(
            result => {
                this.homeData = result;
                this.dataReturned.next();
            },
            error => {
                console.log(error);
            }
        );
    }

    fetchTitle() {
        return this.homeData.title;
    }
}
