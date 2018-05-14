import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MOCK_DATA } from '../mock-data';

@Component({
  selector: 'app-target-attainment-chart',
  templateUrl: './target-attainment-chart.component.html',
  styleUrls: ['./target-attainment-chart.component.css'],
})
export class TargetAttainmentChart {

  constructor() { }

  chart: Chart;
  public previous = MOCK_DATA[MOCK_DATA.length -1].planned;
  public current = MOCK_DATA[MOCK_DATA.length -1].profit;
  private month = MOCK_DATA[MOCK_DATA.length -1].month;
  private currency = MOCK_DATA[MOCK_DATA.length -1].currency;
  private lineUnderChart: string = `${this.month} in ${this.currency}`;

  getPercent() {
    return ((this.current / this.previous) * 100).toFixed(1);
  }

  getPreviousPercent() {
    return ((this.previous / this.current) * 100).toFixed(1);
  }

  getMax() {
    return ( Math.round((((this.previous / this.current) * 100) / 100) * 100) + 100 );
  }

  ngOnInit() {
    this.chart = new Chart(<any>{
        chart: {
          type: 'bar',
          backgroundColor: '#f2f2f2',
        },
        title: {
          text: this.getPercent() + '%',
          style: {
              fontSize: '40px',
              fontWeight: 'bold'
          }
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          visible: false
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
                borderWidth: 0
            }
        },
        credits: {
            enabled: false
        },
        tooltip: false,
        series: [{
          name: 'previous',
          data: [+this.getPreviousPercent()],
          pointWidth: 120,
          borderWidht: 5,
          borderRadius: 5,
          color: '#ffccff',
        },
        {
          name: 'current',
          data: [+this.getPercent()],
          pointWidth: 60,
          borderWidht: 5,
          borderRadius: 5,
          color: '#9900cc'
        }]
      });
  }
}
