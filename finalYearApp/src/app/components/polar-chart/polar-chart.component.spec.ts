import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarChartComponent } from './polar-chart.component';

describe('PolarChartComponent', () => {
  let component: PolarChartComponent;
  let fixture: ComponentFixture<PolarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarChartComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
