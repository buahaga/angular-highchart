import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MOCK_DATA } from '../mock-data';

@Component({
  selector: 'app-evolution-index-chart',
  templateUrl: './evolution-index-chart.component.html',
  styleUrls: ['./evolution-index-chart.component.css']
})
export class EvolutionIndexChart implements OnInit {

  constructor() { }

  private chart: Chart;
  private profit: number[] = MOCK_DATA.map(el => el.profit);
  private planned: number[] = MOCK_DATA.map(el=> el.planned);
  private month: string[] = MOCK_DATA.map(el => el.month);
  private start: number[] = [100];
  private lineUnderChart: string = this.month.slice(-1).join().toUpperCase();

  getMax() {
    return this.profit.reduce((a, b) => (a > b ? a : b));
  }

  ngOnInit() {
    this.chart = new Chart(<any>{
      chart: {
          type: 'column',
          backgroundColor: '#f2f2f2',
      },
      title: {
          text: this.profit.slice(-1),
          style: {
              fontSize: '40px',
              fontWeight: 'bold'
          }
      },
      xAxis: {
          categories: this.month,
          tickLength: 0,
          lineWidth: 0,
          minorGridLineWidth: 0,
          labels: {
            step: this.month.length - 1,
          }
      },
      yAxis: {
        gridLineDashStyle: 'Dot',
        gridLineColor: '#b3b3b3',
        categories: this.start,
        labels: {
          step: this.start.length - 2,
        },
        tickInterval: this.getMax(),
        min: -1,
        max: this.getMax(),
        title: false
      },
      plotOptions: {
          column: {
              grouping: false,
              shadow: false,
              borderWidth: 0
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
