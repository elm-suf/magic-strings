import { TestBed } from '@angular/core/testing';

import { MagicLibService } from './magic-lib.service';

describe('MagicLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicLibService = TestBed.get(MagicLibService);
    expect(service).toBeTruthy();
  });
});
