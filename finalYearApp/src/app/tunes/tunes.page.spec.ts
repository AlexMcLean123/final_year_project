import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunesPage } from './tunes.page';

describe('TunesPage', () => {
  let component: TunesPage;
  let fixture: ComponentFixture<TunesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
