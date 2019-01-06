import { Component, OnInit, Input } from '@angular/core';
import {Footer} from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footer: Footer;
  date: Date = new Date();
  year: number;

  constructor() { }

  ngOnInit() {
    this.year = this.date.getFullYear();
  }

}
