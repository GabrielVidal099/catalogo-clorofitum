import { TestBed } from '@angular/core/testing';

import { kitsService } from './kits.service';

describe('KitsService', () => {
  let service: kitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(kitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
