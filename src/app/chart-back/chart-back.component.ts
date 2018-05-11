import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-back',
  templateUrl: './chart-back.component.html',
  styleUrls: ['./chart-back.component.css']
})
export class ChartBackComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  data = [-89, 0, 800, 400, 300, 205];
  time = ['Jul 17', 'Aug 17', 'Sept 17', 'Oct 17', 'Nov 17', 'Dec 17'];
  steps = [100, 200, 300];

  chart = new Chart(<any>{
    chart: {
        type: 'column'
    },
    title: {
        text: this.data.slice(-1)
    },
    xAxis: {
        categories: this.time,
        title: {
          text: this.time.slice(-1).join().toUpperCase()
        },
        tickLength: 0,
        lineWidth: 0,
        minorGridLineWidth: 0,
        labels: {
          step: this.time.length - 1,
        }
    },
    yAxis: {
      gridLineDashStyle: 'Dot',
      categories: this.steps,
      pointStart: 100,
      labels: {
        step: this.steps.length - 2,
      },
      tickInterval: 1460,
      min: -1,
      max: 1660,
      title: false
    },
    // plotOptions: {
    //     series: {
    //         pointStart: 100
    //     }
    // },
    credits: {
        enabled: false
    },

    tooltip: false,
    series: [{
        showInLegend: false,
        data: this.data,
        pointWidth: 30,
        borderWidht: 5,
        borderRadius: 5,
        color: '#9900cc',
    }]
  });
}