import {Component, OnDestroy, OnInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Title} from './title.model';
import {Project} from './projects/project.model';
import {About} from './about/about.model';
import {Contact} from './contact/contact.model';
import {Footer} from './footer/footer.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    homeData;
    titleData: Title = new Title('', '', '', []);
    projectsData: Project[] = [new Project('', [], '', '', '', [], '')];
    aboutData: About = new About('', [], '');
    contactData: Contact = new Contact([], [[]]);
    footerData: Footer = new Footer('');

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
                    this.contactData = this.homeData.contact; // Store data for contact section.
                    this.footerData = this.homeData.footer; // Store data for footer section.
                }
            );
        } else {
            this.homeData = this.fb.fetchHomeData(); // Fetch data for the home page.
            this.titleData = this.homeData.title; // Store data for title section.
            this.projectsData = this.homeData.projects; // Store data for projects section.
            this.aboutData = this.homeData.about; // Store data for about section.
            this.contactData = this.homeData.contact; // Store data for contact section.
            this.footerData = this.homeData.footer; // Store data for footer section.
        }
    }

    ngOnDestroy() {
        this.fb.dataHomeRetrieved.unsubscribe();
    }

}
