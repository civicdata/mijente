import { TestBed, inject } from '@angular/core/testing';

import { ViewStateServiceService } from './view-state-service.service';

describe('ViewStateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewStateServiceService]
    });
  });

  it('should be created', inject([ViewStateServiceService], (service: ViewStateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
