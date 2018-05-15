import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetAttainmentChart } from './target-attainment-chart.component';

describe('TargetAttainmentChart', () => {
  let component: TargetAttainmentChart;
  let fixture: ComponentFixture<TargetAttainmentChart>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAttainmentChart,],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAttainmentChart);
    component = fixture.componentInstance;
    component.current = 20000;
    component.previous = 10000;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find out right percent in the title', (() => {
    const expected: string = '200.0%';
    const title = component.chart.options.title.text;
    expect(title).toEqual(expected);
  }));

  it('should set right percent to previous bar', (() => {
    const expected: number[] = [50];
    const prev = component.chart.options.series[0].data;
    expect(prev).toEqual(expected);
  }));

  it('should set right percent to current bar', (() => {
    const expected: number[] = [200];
    const cur = component.chart.options.series[1].data;
    expect(cur).toEqual(expected);
  }));

  it('should set right max to yAxis', (() => {
    const expected = 150;
    const yAxis = component.chart.options.yAxis as Highcharts.AxisOptions;
    const max = yAxis.max;
    expect(max).toEqual(expected);
  }));

});
