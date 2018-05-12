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

  private data = [0, 0, 800, 400, 300, 205]; // maybe change func to transform all < 100 to -coords
  private time = ['Jul 17', 'Aug 17', 'Sept 17', 'Oct 17', 'Nov 17', 'Dec 17'];
  private steps = [100, 200, 300];

  public lineUnderChart: string = this.time.slice(-1).join().toUpperCase();

  chart = new Chart(<any>{
    chart: {
        type: 'column',
        backgroundColor: '#e6e6e6',
    },
    title: {
        text: this.data.slice(-1),
        style: {
            fontSize: '40px',
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: this.time,
        tickLength: 0,
        lineWidth: 0,
        minorGridLineWidth: 0,
        labels: {
          step: this.time.length - 1,
        }
    },
    yAxis: {
      gridLineDashStyle: 'Dot',
      gridLineColor: '#b3b3b3',
      categories: this.steps,
      labels: {
        step: this.steps.length - 2,
      },
      tickInterval: 1660,
      min: -1,
      max: 1660,
      title: false
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        },
        // series: {
        //     pointStart: 100
        // }
    },
    credits: {
        enabled: false
    },

    tooltip: false,
    series: [{
        showInLegend: false,
        data: this.data,
        pointWidth: 30,
        color: '#9900cc',
    }]
  });
}
