import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBtnComponent } from './chart-btn.component';

describe('ChartBtnComponent', () => {
  let component: ChartBtnComponent;
  let fixture: ComponentFixture<ChartBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBtnComponent ]
    })
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(ChartBtnComponent);
        component = fixture.componentInstance;
        component.text = 'btn';
        fixture.detectChanges();
      });
  }));

  it('should display right text in btn', async(() => {
    const expected: string = 'btn';
    const text = component.text;
    expect(text).toEqual(expected);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
