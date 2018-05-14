import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAttainmentChart } from './target-attainment-chart.component';
import { ChartLabelComponent } from '../chart-label/chart-label.component';

describe('TargetAttainmentChart', () => {
  let component: TargetAttainmentChart;
  let fixture: ComponentFixture<TargetAttainmentChart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAttainmentChart, ChartLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAttainmentChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
