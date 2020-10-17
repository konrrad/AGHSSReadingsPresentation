import { Component, OnInit } from '@angular/core';
import { ReaddataService } from '../readdata.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  constructor(private dataService:ReaddataService) { }

  public sensors=this.dataService.get_sensors();
  ngOnInit(): void {
  }

}
