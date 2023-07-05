import { TestBed } from '@angular/core/testing';

import { ValorantEloService } from './valorant-elo.service';

describe('ValorantEloService', () => {
  let service: ValorantEloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantEloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
