import { TestBed } from '@angular/core/testing';

import { LolEloService } from './lol-elo.service';

describe('LolEloService', () => {
  let service: LolEloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolEloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
