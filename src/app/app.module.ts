import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartBackComponent } from './chart-back/chart-back.component';
import { ChartBtnComponent } from './chart-btn/chart-btn.component';
import { ChartLabelComponent } from './chart-label/chart-label.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartBackComponent,
    ChartBtnComponent,
    ChartLabelComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
