import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

  constructor(
    // private previous: number,
    // private current: number,
    // private month: string,
    // private currency: string
    ) { }

    previous = 150;
    current = 190;
    month = 'Dec 17';
    currency = 'USD';

    getPercent() {
      return ((this.current / this.previous) * 100).toFixed(1) + '%';
    }

    getDataAndCurrency() {
      return `${this.month} in ${this.currency}`
    }

  ngOnInit() { }

  chart = new Chart(<any>{
    chart: {
        type: 'bar'
      },
      title: {
        text: this.getPercent()
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        visible: false;
      },
      yAxis: {
        title: {
          text: this.getDataAndCurrency()
        }
        min: 0,
        max: 200,
        tickInterval: 100,
        gridLineDashStyle: 'Dot',
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
        data: [this.previous],
        pointWidth: 90,
        borderWidht: 5,
        borderRadius: 5,
        color: '#ffccff',
      },
      {
        name: 'current',
        data: [this.current],
        pointWidth: 30,
        borderWidht: 5,
        borderRadius: 5,
        color: '#9900cc'
      }]
    });
}
