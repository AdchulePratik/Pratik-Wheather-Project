import { TestBed } from '@angular/core/testing';

import { WheatheringService } from './wheathering.service';

describe('WheatheringService', () => {
  let service: WheatheringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatheringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
