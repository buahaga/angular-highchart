import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvolutionIndexChart } from './evolution-index-chart.component';

describe('EvolutionIndexChart', () => {
  let component: EvolutionIndexChart;
  let fixture: ComponentFixture<EvolutionIndexChart>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionIndexChart ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionIndexChart);
    component = fixture.componentInstance;
    component.profit = [10, 20, 30, 100];
    component.planned = [50, 60, 70, 200];
    component.month = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should generate right title in chart', (() => {
    const expected: number = 100;
    const title = Number(component.chart.options.title.text);
    expect(title).toEqual(expected);
  }));

  it('should return right series data', (() => {
    const expected: number[] = component.profit;
    const series = component.chart.options.series[0].data;
    expect(series).toEqual(expected);
  }));

});
