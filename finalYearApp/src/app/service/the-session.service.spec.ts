import { TestBed } from '@angular/core/testing';

import { TheSessionService } from './the-session.service';

describe('TheSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheSessionService = TestBed.get(TheSessionService);
    expect(service).toBeTruthy();
  });
});
