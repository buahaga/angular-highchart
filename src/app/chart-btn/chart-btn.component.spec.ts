import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartBtnComponent } from './chart-btn.component';

describe('ChartBtnComponent', () => {
  let component: ChartBtnComponent;
  let fixture: ComponentFixture<ChartBtnComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBtnComponent ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBtnComponent);
    component = fixture.componentInstance;
    component.text = 'btn';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right text in btn', (() => {
    const expected: string = 'btn';
    const text = component.text;
    expect(text).toEqual(expected);
  }));

});
