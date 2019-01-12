import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  error = 'Page not found...Stay calm';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              if (params['type'] === 'server-issue') {
                this.error = 'Server error...Stay calm';
              }
            }
        );
  }

}
