import { TestBed } from '@angular/core/testing';

import { FrisurService } from './frisur.service';

describe('FrisurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrisurService = TestBed.get(FrisurService);
    expect(service).toBeTruthy();
  });
});
