import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensorsComponent } from './sensors/sensors.component';
import { FormsModule } from '@angular/forms';
import { ReadingsComponent } from './readings/readings.component';
import { ReadingComponent } from './reading/reading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadComponent,
    SensorComponent,
    SensorsComponent,
    ReadingsComponent,
    ReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
