import { TestBed } from '@angular/core/testing';

import { DriverResultsService } from './driver-results.service';

describe('DriverResultsService', () => {
  let service: DriverResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
