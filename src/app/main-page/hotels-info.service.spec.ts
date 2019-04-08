import { TestBed, inject } from '@angular/core/testing';

import { HotelsInfoService } from './hotels-info.service';

describe('HotelsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsInfoService]
    });
  });

  it('should be created', inject([HotelsInfoService], (service: HotelsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
