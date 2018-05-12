import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBtnComponent } from './chart-btn.component';

describe('ChartBtnComponent', () => {
  let component: ChartBtnComponent;
  let fixture: ComponentFixture<ChartBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
