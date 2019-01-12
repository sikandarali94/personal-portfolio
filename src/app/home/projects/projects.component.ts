import { Component, OnInit, Input } from '@angular/core';
import {Project} from './project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  /* Home component binds its projects data to the projects variable here. */
  @Input() projects: Project[] = [new Project([[]], '', '', '', [], '', [], '')];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /* This function redirects to proper project detail URL for a project */
  onView(route: string) {
    this.router.navigate(['/projects', route]);
  }

}
