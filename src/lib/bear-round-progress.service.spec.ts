import { TestBed } from '@angular/core/testing';

import { BearRoundProgressService } from './bear-round-progress.service';

describe('BearRoundProgressService', () => {
  let service: BearRoundProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearRoundProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
