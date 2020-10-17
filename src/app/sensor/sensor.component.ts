import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  @Input() sensor: Sensor;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void
  {

  }

}
