import { TestBed } from '@angular/core/testing';

import { RichCommunicatorService } from './rich-communicator.service';

describe('RichCommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RichCommunicatorService = TestBed.get(RichCommunicatorService);
    expect(service).toBeTruthy();
  });
});
