import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;;
  });

  it('#onClick() should toggle #text', () => {
    expect(component.text).toBe('Evolution index', 'at first');
    component.onClick();
    expect(component.text).toBe('Target Attainment', 'after first click');
    component.onClick();
    expect(component.text).toBe('Evolution index', 'after second click');
  });

  it('#onClick() should toggle #btnToggle', () => {
    expect(component.btnToggle).toBe(false, 'at first');
    component.onClick();
    expect(component.btnToggle).toBe(true, 'after first click');
    component.onClick();
    expect(component.btnToggle).toBe(false, 'after second click');
  });

  it('should create the app', async(() => {
    expect(component).toBeDefined();
  }));

});
