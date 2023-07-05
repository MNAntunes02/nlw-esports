import { TestBed } from '@angular/core/testing';

import { ApexEloService } from './apex-elo.service';

describe('ApexEloService', () => {
  let service: ApexEloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexEloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
