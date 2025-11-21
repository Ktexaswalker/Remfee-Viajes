import { TestBed } from '@angular/core/testing';

import { Com } from './com';

describe('Com', () => {
  let service: Com;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Com);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
