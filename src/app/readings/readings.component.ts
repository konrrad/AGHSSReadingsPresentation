import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ReaddataService } from '../readdata.service';
import { Reading } from '../reading';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {


  public id:number;
  public readings:Reading[];
  private sensor:Sensor;
  public invalid_reading:boolean;
  public plot_visible:boolean=false;
  constructor(private data_service:ReaddataService) { }

  ngOnInit(): void {
  }

  get_timestamps():Array<number>
  {
    return this.readings.map(element=>element.timestamp);
  }

  get_results():Array<number>
  {
    return this.readings.map(element=>element.result);

  }

  get_readings():void
  {
    console.log(this.id)
    this.readings=this.data_service.get_readings_by_id(this.id);
    this.invalid_reading=false;
    console.log(this.readings);
  }

  process_data():void
  {
    if(!(this.id===null))
    {
      this.sensor=this.data_service.get_sensor_by_id(this.id);
      console.log(this.sensor);
      if(isNaN(this.sensor.a)||isNaN(this.sensor.b))
      {
        this.invalid_reading=true;
        return;
      }
      this.readings.forEach(element=>element.process_data(this.sensor.a,this.sensor.b));
    }
    
  }

  toggle_plot():void
  {
    this.plot_visible= !this.plot_visible;
  }

}
