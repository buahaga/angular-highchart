import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetAttainmentChart } from './target-attainment-chart.component';

describe('TargetAttainmentChart', () => {
  let component: TargetAttainmentChart;
  let fixture: ComponentFixture<TargetAttainmentChart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAttainmentChart,],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(TargetAttainmentChart);
        component = fixture.componentInstance;
        component.current = 20000;
        component.previous = 10000;
        fixture.detectChanges();
      });
  }));

  it('should find out right percent in the title', async(() => {
    const expected: string = '200.0%';
    const title = component.chart.options.title.text;
    expect(title).toEqual(expected);
  }));

  it('should set right percent to previous bar', async(() => {
    const expected: number[] = [50];
    const prev = component.chart.options.series[0].data;
    expect(prev).toEqual(expected);
  }));

  it('should set right percent to current bar', async(() => {
    const expected: number[] = [200];
    const cur = component.chart.options.series[1].data;
    expect(cur).toEqual(expected);
  }));

  // it('should set right max to yAxis', async(() => {
  //   const expected = 150;
  //   const max = component.chart.options.yAxis.max;
  //   expect(max).toEqual(expected);
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
