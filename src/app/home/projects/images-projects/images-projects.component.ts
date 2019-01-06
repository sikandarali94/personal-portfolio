import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images-projects',
  templateUrl: './images-projects.component.html',
  styleUrls: ['./images-projects.component.scss']
})
export class ImagesProjectsComponent implements OnInit {
  /* Projects component binds its projects.img data to the imagesURL variable here. */
  @Input() imagesURL: string[];

  constructor() { }

  ngOnInit() {
  }

}
