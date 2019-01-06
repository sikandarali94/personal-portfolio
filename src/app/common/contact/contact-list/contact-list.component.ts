import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  /* Contact component binds its contact.links data to the links variable here. */
  @Input() links: string[][];

  constructor() { }

  ngOnInit() {
  }

}
