import { TestBed, inject } from '@angular/core/testing';

import { MockDonationRepositoryService } from './mock-donation-repository.service';

describe('MockDonationRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDonationRepositoryService]
    });
  });

  it('should be created', inject([MockDonationRepositoryService], (service: MockDonationRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
