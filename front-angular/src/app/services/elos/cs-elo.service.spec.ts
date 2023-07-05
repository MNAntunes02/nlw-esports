import { TestBed } from '@angular/core/testing';

import { CsEloService } from './cs-elo.service';

describe('CsEloService', () => {
  let service: CsEloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsEloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
