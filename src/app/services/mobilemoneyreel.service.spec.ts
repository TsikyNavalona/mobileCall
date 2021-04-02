import { TestBed } from '@angular/core/testing';

import { MobilemoneyreelService } from './mobilemoneyreel.service';

describe('MobilemoneyreelService', () => {
  let service: MobilemoneyreelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilemoneyreelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
