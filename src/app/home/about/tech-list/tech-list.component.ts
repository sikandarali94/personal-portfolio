import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {
  /* About component binds its about.technologies data to the techList variable here. */
  @Input() techList: string[];

  constructor() { }

  ngOnInit() {
  }

}
