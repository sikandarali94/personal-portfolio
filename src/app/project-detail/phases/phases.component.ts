import {Component, Input, OnInit} from '@angular/core';
import {Phase} from './phase.model';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss']
})
export class PhasesComponent implements OnInit {
  /* Project detail component binds its phases data to the phases variable here. */
  @Input() phases: Phase[] = [new Phase([], '', '')];

  constructor() { }

  ngOnInit() {
  }

}
