import { TestBed } from '@angular/core/testing';

import { HttpInfoService } from './http-info.service';

describe('HttpInfoService', () => {
  let service: HttpInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
