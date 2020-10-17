import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensorsComponent } from './sensors/sensors.component';
import { FormsModule } from '@angular/forms';
import { ReadingsComponent } from './readings/readings.component';
import { ReadingComponent } from './reading/reading.component';
import { PlotComponent } from './plot/plot.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs=PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadComponent,
    SensorComponent,
    SensorsComponent,
    ReadingsComponent,
    ReadingComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
