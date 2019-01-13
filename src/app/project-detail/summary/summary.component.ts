import { Component, OnInit, Input } from '@angular/core';
import {Summary} from './summary.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  /* Project detail component binds its summary data to the summary variable here. */
  @Input() summary: Summary = new Summary(
      '',
      {client: '', date: '', role: ''},
      [[]],
      ''
      );

  constructor() { }

  ngOnInit() {
  }

  getBackground(image: string): string {
    return `url(${image})`;
  }

}
