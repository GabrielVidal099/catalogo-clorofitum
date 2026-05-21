import { TestBed } from '@angular/core/testing';

import { Whatsapp } from './whatsapp.service';

describe('Whatsapp', () => {
  let service: Whatsapp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Whatsapp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
