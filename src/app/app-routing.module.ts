import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { SensorsComponent } from './sensors/sensors.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path:'home',
    component: AppComponent
  },
  {
    path: 'upload',
    component: UploadComponent

  },
  {
    path: 'sensors',
    component: SensorsComponent
  },
  {
    path: 'readings',
    component: ReadingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
