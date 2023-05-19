import { TestBed } from '@angular/core/testing';

import { YyyService } from './yyy.service';

describe('YyyService', () => {
  let service: YyyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YyyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
