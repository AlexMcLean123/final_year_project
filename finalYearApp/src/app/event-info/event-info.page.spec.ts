import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInfoPage } from './event-info.page';

describe('EventInfoPage', () => {
  let component: EventInfoPage;
  let fixture: ComponentFixture<EventInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
