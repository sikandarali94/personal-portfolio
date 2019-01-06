import { Component, OnInit, Input } from '@angular/core';
import {Contact} from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /* Home component binds its contact data to the contact variable here. */
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
