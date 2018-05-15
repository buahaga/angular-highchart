import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MOCK_DATA } from '../mock-data';

@Component({
  selector: 'app-target-attainment-chart',
  templateUrl: './target-attainment-chart.component.html',
  styleUrls: ['./target-attainment-chart.component.css'],
})
export class TargetAttainmentChart implements OnInit {

  constructor() { }

  @Input() current: number;
  @Input() previous: number;
  @Input() month: string;

  public chart: Chart;
  public chartLabel: string;

  getPercent(n: number, m: number): number {
    return n / m * 100;
  }

  getMax() {
    return Math.round(this.previous / this.current * 100) + 100 ;
  }

  ngOnInit() {
    this.chartLabel = `${this.month} in USD`;
    this.chart = new Chart(<any>{
        chart: {
          type: 'bar',
          backgroundColor: '#f2f2f2',
        },
        title: {
          text: this.getPercent(this.current, this.previous).toFixed(1) + '%',
          style: {
              fontSize: '40px',
              fontWeight: 'bold',
          }
        },
        subtitle: {
          text: '',
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          title: false,
          min: 0,
          max: this.getMax(),
          tickInterval: 100,
          gridLineColor: '#f2f2f2',
        },
        plotOptions: {
            bar: {
                grouping: false,
                shadow: false,
                borderWidth: 0,
            }
        },
        credits: {
            enabled: false,
        },
        tooltip: false,
        series: [{
          name: 'previous',
          data: [this.getPercent(this.previous, this.current)],
          pointWidth: 120,
          borderWidht: 5,
          borderRadius: 5,
          color: '#ffccff',
        },
        {
          name: 'current',
          data: [this.getPercent(this.current, this.previous)],
          pointWidth: 60,
          borderWidht: 5,
          borderRadius: 5,
          color: '#9900cc',
        }]
      });
  }
}
