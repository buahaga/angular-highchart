import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

  constructor() { }

    private previous = 115;
    private current = 190;
    private month = 'Dec 17';
    private currency = 'USD';

    public  lineUnderChart: string = `${this.month} in ${this.currency}`;

    getPercent() {
      return ((this.current / this.previous) * 100).toFixed(1) + '%';
    }

  ngOnInit() { }

  chart = new Chart(<any>{
    chart: {
        type: 'bar',
        backgroundColor: '#e6e6e6',
      },
      title: {
        text: this.getPercent(),
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
        max: 200,
        tickInterval: 100,
        gridLineColor: '#e6e6e6',
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
        pointWidth: 120,
        borderWidht: 5,
        borderRadius: 5,
        color: '#ffccff',
      },
      {
        name: 'current',
        data: [this.current],
        pointWidth: 60,
        borderWidht: 5,
        borderRadius: 5,
        color: '#9900cc'
      }]
    });
}
