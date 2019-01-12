import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class FirebaseService {
    dataHomeRetrieved = new Subject(); // Observes if data for the home page has been retrieved successfully.
    dataHomeStored = false; // Indicates if data for the home page has been stored in the service.
    dataCommonRetrieved = new Subject(); // Observes if data for the common component has been retrieved successfully.
    dataCommonStored = false; // Indicates if data for the common component has been stored in the service.
    dataProjectsRetrieved = new Subject(); // Observes if data for the project list has been retrieved successfully.
    dataProjectsStored = false; // Indicates if data for the project list has been stored in the service.
    dataDetailRetrieved = new Subject(); // Observes if data for the project detail page has been retrieved successfully.
    dataDetailStored = false; // Indicates if data for the project detail page has been stored in the service.

    routes: string[]; // This stores all the routes for the projects to be opened in detail.
    private headerImg: string; // Store header image URL path.

    private homeData; // This stores data for the home page.
    private commonData; // This stores data for contact and footer section which is displayed across all routes.
    private projectsData; // This stores data for the project list.
    private detailData; // This stores data for the project detail page.

    constructor(private http: HttpClient, private router: Router) {}

    getHomeData() {
        /* GET data from Firebase to populate the home page in the app. Subscribing here because we want to store the retrieved data within
        the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/home.json').subscribe(
            result => {
                this.homeData = result; // Store the retrieved home page data within the service.
                this.dataHomeStored = true; // Data for home page has been stored.
                this.dataHomeRetrieved.next(); // Indicate home page data has been retrieved.
            },
            error => {
                this.router.navigate(['/error', 'server-issue']);
            }
        );
    }

    getCommonData() {
        /* GET data from Firebase to populate the common component in the app. Subscribing here because we want to store the retrieved data
        within the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/common.json').subscribe(
            result => {
                this.commonData = result; // Store the retrieved common component data within the service.
                this.dataCommonStored = true; // Data for common component has been stored.
                this.dataCommonRetrieved.next(); // Indicate common component data has been retrieved.
            },
            error => {
                this.router.navigate(['/error', 'server-issue']);
            }
        );
    }

    storeRoutes (projectsList) {
        return projectsList.map(project => project.route); // Map all route property data into an array.
    }

    getProjectsData() {
        /* GET data from Firebase to populate the project list in the app. Subscribing here because we want to store the retrieved data
        within the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/projects.json').subscribe(
            result => {
                this.projectsData = result; // Store the retrieved project list data within the service.

                // If header image URL path is not defined.
                if (!this.headerImg) {
                    this.headerImg = this.projectsData.header; // Store header image URL path.
                }

                this.routes = this.storeRoutes(this.projectsData.list); // Store the routes in project list within the service.
                this.dataProjectsStored = true; // Data for project list component has been restored.
                this.dataProjectsRetrieved.next(); // Indicate project list component data has been retrieved.
            },
            error => {
                this.router.navigate(['/error', 'server-issue']);
            }
        );
    }

    getDetailData() {
        /* GET data from Firebase to populate the project detail page in the app. Subscribing here because we want to store the retrieved
        data within the service.
         */
        return this.http.get('https://personal-portfolio-f7b43.firebaseio.com/detail.json').subscribe(
            result => {
                this.detailData = result; // Store the retrieved project detail data within the service.

                // If header image URL path is not defined.
                if (!this.headerImg) {
                    this.headerImg = this.detailData.header; // Store header image URL path.
                }

                this.dataDetailStored = true; // Data for project detail page has been restored.
                this.dataDetailRetrieved.next(); // Indicate project detail page data has been retrieved.
            },
            error => {
                this.router.navigate(['/error', 'server-issue']);
            }
        );
    }

    fetchHomeData() {
        return this.homeData; // return data for home page.
    }

    fetchCommonData() {
        return this.commonData; // return data for common component.
    }

    fetchProjectsData() {
        return this.projectsData; // return data for project list component.
    }

    fetchDetailData(route: string) {
        if (!this.detailData[route]) {
            this.router.navigate(['/error', 'not-found']);
        } else {
            return this.detailData[route]; // return data for project detail page.
        }
    }

    fetchHeader() {
        return this.headerImg; // Return the header image path.
    }
}
