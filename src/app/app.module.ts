import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { TargetAttainmentChart } from './target-attainment-chart/target-attainment-chart.component';
import { EvolutionIndexChart } from './evolution-index-chart/evolution-index-chart.component';
import { ChartBtnComponent } from './chart-btn/chart-btn.component';
import { ChartLabelComponent } from './chart-label/chart-label.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetAttainmentChart,
    EvolutionIndexChart,
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
