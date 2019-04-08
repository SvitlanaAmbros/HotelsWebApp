import { TestBed, inject } from '@angular/core/testing';

import { PopupControlsService } from './popup-controls.service';

describe('PopupControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupControlsService]
    });
  });

  it('should be created', inject([PopupControlsService], (service: PopupControlsService) => {
    expect(service).toBeTruthy();
  }));
});
