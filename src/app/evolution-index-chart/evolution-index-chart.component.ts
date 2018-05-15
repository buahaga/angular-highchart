import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-evolution-index-chart',
  templateUrl: './evolution-index-chart.component.html',
  styleUrls: ['./evolution-index-chart.component.css'],
})
export class EvolutionIndexChart implements OnInit {

  constructor() { }

  @Input() profit: number[];
  @Input() planned: number[];
  @Input() month: string[];

  public chart: Chart;
  public start: number[] = [100];
  public chartLabel: string;

  get maxY(): number {
    return Math.max.apply(null, this.profit);
  }

  ngOnInit() {
    this.chartLabel = this.month[this.month.length-1];
    this.chart = new Chart(<any>{
      chart: {
          type: 'column',
          backgroundColor: '#f2f2f2',
      },
      title: {
          text: this.profit[this.profit.length-1],
          style: {
              fontSize: '40px',
              fontWeight: 'bold',
          }
      },
      xAxis: {
          categories: this.month,
          tickLength: 0,
          lineWidth: 0,
          minorGridLineWidth: 0,
          labels: {
            step: this.month.length - 1,
          },
      },
      yAxis: {
        gridLineDashStyle: 'Dot',
        gridLineColor: '#b3b3b3',
        categories: this.start,
        tickInterval: this.maxY,
        min: -1,
        max: this.maxY,
        title: false,
      },
      plotOptions: {
          column: {
              grouping: false,
              shadow: false,
              borderWidth: 0,
          },
      },
      credits: {
          enabled: false
      },
      tooltip: false,
      series: [{
          showInLegend: false,
          data: this.profit,
          pointWidth: 30,
          color: '#9900cc',
      }]
    });
  }
}
