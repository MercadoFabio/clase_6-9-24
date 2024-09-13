import { TestBed } from '@angular/core/testing';

import { ProgramdorServiceService } from './programdor-service.service';

describe('ProgramdorServiceService', () => {
  let service: ProgramdorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramdorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
