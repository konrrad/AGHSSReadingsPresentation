import { Component, OnInit } from '@angular/core';
import { ReaddataService } from '../readdata.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public file_with_ids:any;
  public file_with_readings:any;
  public id_name_string:string;
  public readings_string:string;
  public ids_uploaded:boolean=false;
  public readings_uploaded:boolean=false;
  private file_reader:FileReader=new FileReader();
  constructor(private readdataService:ReaddataService) { }

  ngOnInit(): void {
  }

  fileWithIdsChanged(e):void
  {
    this.file_with_ids=e.target.files[0];
    console.log("CHA")
  }

  fileWithReadingsChanged(e):void
  {
    this.file_with_readings=e.target.files[0];
    
  }

  uploadDocWithIds():void
  {
    if(this.file_with_ids)
    {
      this.file_reader.onload=(e)=>
      {
        this.id_name_string=this.file_reader.result as string;
        this.ids_uploaded=true;
        this.readdataService.set_id_name(this.id_name_string);

      };
      this.file_reader.readAsText(this.file_with_ids);
    }
  }

  uploadDocWithReadings():void
  {
    if(this.file_with_readings)
    {
      this.file_reader.onload=(e)=>
      {
        this.readings_string=this.file_reader.result as string;
        this.readings_uploaded=true;
        this.readdataService.set_readings(this.readings_string);
      };
      this.file_reader.readAsText(this.file_with_readings);

    }
  }


}
