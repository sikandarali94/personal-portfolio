import {Component, OnInit, Input} from '@angular/core';
import {Contact} from './contact/contact.model';
import {Footer} from './footer/footer.model';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  @Input() common;
  /* contactData is initialized to follow the convention of the Contact model to populate the contact section.
     */
  contactData: Contact = new Contact([], [[]]);
  /* footerData is initialized to follow the convention of the Footer model to populate the footer section.
   */
  footerData: Footer = new Footer('');

  constructor() { }

  ngOnInit() {
    this.contactData = this.common.contact;
    this.footerData = this.common.footer;
  }
}
