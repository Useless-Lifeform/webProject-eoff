import { TestBed } from '@angular/core/testing';

import { BediktDataService } from './bedikt-data.service';

describe('BediktDataService', () => {
  let service: BediktDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BediktDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
