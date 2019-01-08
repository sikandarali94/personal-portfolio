import { Component, OnInit, Input } from '@angular/core';
import {List} from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  /* Projects list component binds its list data to the projects variable here. */
  @Input() projects: List[] = [new List('', [], '')];

  constructor() { }

  ngOnInit() {
  }

}
