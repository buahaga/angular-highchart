import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionIndexChart } from './evolution-index-chart.component';
import { ChartLabelComponent } from '../chart-label/chart-label.component';

describe('EvolutionIndexChart', () => {
  let component: EvolutionIndexChart;
  let fixture: ComponentFixture<EvolutionIndexChart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionIndexChart, ChartLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionIndexChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
