import { Component, OnInit, Input } from '@angular/core';
import {Project} from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  /* Home component binds the projects data it has to the projects variable here. */
  @Input() projects: Project[] = [new Project('', [], '', '', '', [], '')];

  constructor() { }

  ngOnInit() {}

}
