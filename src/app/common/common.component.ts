import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../firebase.service';
import {Contact} from './contact/contact.model';
import {Footer} from './footer/footer.model';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit, OnDestroy {
  commonData; // commonData will store data for the common component once the Firebase service has successfully retrieved the data.

  /* contactData is initialized to follow the convention of the Contact model to populate the contact section.
     */
  contactData: Contact = new Contact([], [[]]);
  /* footerData is initialized to follow the convention of the Footer model to populate the footer section.
   */
  footerData: Footer = new Footer('');

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    if (!this.fb.dataCommonStored) {
      /* Call method in Firebase service that gets the data for common component from the Firebase database.*/
      this.fb.getCommonData();
      /* When data has been fetched from Firebase successfully */
      this.fb.dataCommonRetrieved.subscribe(
          () => {
            this.commonData = this.fb.fetchCommonData(); // Fetch data for the common component.
            this.contactData = this.commonData.contact; // Store data for contact section.
            this.footerData = this.commonData.footer; // Store data for footer section.
          }
      );
    } else {
      this.commonData = this.fb.fetchCommonData(); // Fetch data for the common component.
      this.contactData = this.commonData.contact; // Store data for contact section.
      this.footerData = this.commonData.footer; // Store data for footer section.
    }
  }

  ngOnDestroy() {
    this.fb.dataCommonRetrieved.unsubscribe(); // When common component is destroyed, unsubscribe from the dataCommonRetrieved observable.
  }

}
