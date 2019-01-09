import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-attributes-summary',
  templateUrl: './attributes-summary.component.html',
  styleUrls: ['./attributes-summary.component.scss']
})
export class AttributesSummaryComponent implements OnInit, OnChanges {
  /* Summary component binds its attributes data to the attributes variable here. */
  @Input() attributes: {client: string, date: string, role: string};
  keys: string[]; // This stores the key values of the attributes value.

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    /* When the attributes variable is bound to the attributes data after the firebase service retrieves data. Otherwise, keys variable will
    be stored as undefined.
     */
    if (this.attributes) {
      this.keys = Object.keys(this.attributes); // Store key values of attributes variable in an array.
    }
  }

}
