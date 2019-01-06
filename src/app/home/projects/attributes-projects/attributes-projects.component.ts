import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attributes-projects',
  templateUrl: './attributes-projects.component.html',
  styleUrls: ['./attributes-projects.component.scss']
})
export class AttributesProjectsComponent implements OnInit {
  @Input() attributes: string[][];

  constructor() { }

  ngOnInit() {
  }

}
