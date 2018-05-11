import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartBackComponent } from './chart-back/chart-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartBackComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
