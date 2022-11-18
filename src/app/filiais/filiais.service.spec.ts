import { TestBed } from '@angular/core/testing';

import { FiliaisService } from './filiais.service';

describe('FiliaisService', () => {
  let service: FiliaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiliaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
