import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-images-phases',
  templateUrl: './images-phases.component.html',
  styleUrls: ['./images-phases.component.scss']
})
export class ImagesPhasesComponent implements OnInit {
  /* Phases component binds its images data to the images variable here. */
  @Input() images: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  getBackground(image: string) {
    return `url(${image})`;
  }

}
