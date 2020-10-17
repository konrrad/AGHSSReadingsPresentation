import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { strict } from 'assert';
import { element } from 'protractor';
import { Reading } from './reading';
import { Sensor } from './sensor';

@Injectable({
  providedIn: 'root'
})
export class ReaddataService {


  
  private readings_unparsed:string;
  private id_name_unparsed:string;
  private sensors:Sensor[]=[];
  private readings:Reading[]=[];
  
  constructor() { }

  set_readings(readings:string):void
  {
    this.readings_unparsed=readings;
    this.parse_readings();
  }

  set_id_name(id_name:string):void
  {
    this.id_name_unparsed=id_name;
    this.parse_sensors();
  }


  private parse_sensors():void
  {
    var lines=this.get_lines_from_string(this.id_name_unparsed.trim());
    console.log("PARSE SENSORS");
    lines.forEach(element => {
      
        element=element.trim();
        if(!this.isBlank(element))
        {
          var params=element.split(" ");
          params.forEach(element=> element.trim());
          this.sensors.push(new Sensor(Number(params[0]),params[1]));
          
        }
      });
  }

  private isBlank(str) {
    return (!str || /^\s*$/.test(str));
  }

  private parse_readings():void
  {
    console.log(this.readings_unparsed);

    var lines=this.get_lines_from_string(this.readings_unparsed.trim());
    lines.forEach(element => {
        element=element.trim();
        if(!this.isBlank(element))
        {
          var params=element.split(" ");
          params.forEach(element=> element.trim());
          this.readings.push(new Reading(Number(params[0]),Number(params[1]),Number(params[2])));
          
        }
      });

      console.log(this.readings.length)


  }

  private get_lines_from_string(to_parse:string):string[]
  {
      return to_parse.split(/\r?\n/);
  }

  public get_sensors():Sensor[]
  {
    return this.sensors;
  }

  public get_readings():Reading[]
  {
    return this.readings;
  }

  public get_readings_by_id(id: number):Reading[]
  {
      var result=[];
      this.readings.forEach(element=> {
        if(element.get_id()==id)
        {
          result.push(element);
        }
      });
      return result;
  }

  public get_sensor_by_id(id:number):Sensor
  {
      return this.sensors.find(el=>el.getId()==id);
  }


}
