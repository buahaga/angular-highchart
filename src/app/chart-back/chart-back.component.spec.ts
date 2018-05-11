import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBackComponent } from './chart-back.component';

describe('ChartBackComponent', () => {
  let component: ChartBackComponent;
  let fixture: ComponentFixture<ChartBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
