import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLabelComponent } from './chart-label.component';

describe('ChartLabelComponent', () => {
  let component: ChartLabelComponent;
  let fixture: ComponentFixture<ChartLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLabelComponent ]
    })
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(ChartLabelComponent);
        component = fixture.componentInstance;
        component.text = 'hello';
        fixture.detectChanges();
      });
  }));

  it('should display right text in component', async(() => {
    const expected: string = 'hello';
    const text = component.text;
    expect(text).toEqual(expected);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
