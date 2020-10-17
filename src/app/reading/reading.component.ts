import { Component, Input, OnInit } from '@angular/core';
import { Reading } from '../reading';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  constructor() { }

  @Input() reading:Reading;
  ngOnInit(): void {
  }

  is_undefined():boolean
  {
    return isNaN(this.reading.processing_result);
  }

}
