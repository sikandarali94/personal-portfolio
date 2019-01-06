import { Component, OnInit, Input } from '@angular/core';
import {Footer} from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /* Home component binds its footer data to the footer variable here. */
  @Input() footer: Footer;
  date: Date = new Date(); // Store the current date.
  year: number;

  constructor() { }

  ngOnInit() {
    this.year = this.date.getFullYear(); // Store the full year of the current date
  }

}
