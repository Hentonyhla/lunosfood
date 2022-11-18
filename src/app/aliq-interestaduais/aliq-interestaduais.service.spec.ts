import { TestBed } from '@angular/core/testing';

import { AliqInterestaduaisService } from './aliq-interestaduais.service';

describe('AliqInterestaduaisService', () => {
  let service: AliqInterestaduaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AliqInterestaduaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
