import { TestBed } from '@angular/core/testing';

import { Filter } from './filter.service';

describe('Filter', () => {
  let service: Filter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
