import { TestBed } from '@angular/core/testing';

import { CredenceServiceService } from './credence-service.service';

describe('CredenceServiceService', () => {
  let service: CredenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
