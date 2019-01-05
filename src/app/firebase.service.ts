import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseService {
    constructor(private http: HttpClient) {}
    getHomeData() {
        /* GET data from Firebase to populate in the app. Subscribing here because we want to store the returned data within the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/home.json').subscribe(
            result => {
                console.log(result);
            },
            error => {
                console.log(error);
            }
        );
    }
}
