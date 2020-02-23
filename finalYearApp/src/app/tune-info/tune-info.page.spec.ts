import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneInfoPage } from './tune-info.page';

describe('TuneInfoPage', () => {
  let component: TuneInfoPage;
  let fixture: ComponentFixture<TuneInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuneInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

})
