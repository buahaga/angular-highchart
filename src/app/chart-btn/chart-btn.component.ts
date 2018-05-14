import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-chart-btn',
  templateUrl: './chart-btn.component.html',
  styleUrls: ['./chart-btn.component.css'],
})
export class ChartBtnComponent implements OnInit {

  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
