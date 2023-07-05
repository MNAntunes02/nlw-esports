import { TestBed } from '@angular/core/testing';

import { DotaEloService } from './dota-elo.service';

describe('DotaEloService', () => {
  let service: DotaEloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotaEloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
