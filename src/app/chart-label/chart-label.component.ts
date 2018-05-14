import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-label',
  templateUrl: './chart-label.component.html',
  styleUrls: ['./chart-label.component.css']
})
export class ChartLabelComponent implements OnInit {

  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
