import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvolutionIndexChart } from './evolution-index-chart.component';

describe('EvolutionIndexChart', () => {
  let component: EvolutionIndexChart;
  let fixture: ComponentFixture<EvolutionIndexChart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionIndexChart ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(EvolutionIndexChart);
        component = fixture.componentInstance;
        component.profit = [10, 20, 30, 100];
        component.planned = [50, 60, 70, 200];
        fixture.detectChanges();
      });
  }));

  it('should generate right title in chart', async(() => {
    const expected: string = '100';
    const title = component.chart.options.title.text;
    expect(title).toEqual(expected);
  }));

  it('should return right series data', async(() => {
    const expected: number[] = component.profit;
    const series = component.chart.options.series[0].data;
    expect(series).toEqual(expected);
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
